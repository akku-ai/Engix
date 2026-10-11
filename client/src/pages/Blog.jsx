import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Globe2,
  Search,
  X,
} from 'lucide-react';

import usePageTitle from '../hooks/usePageTitle';
import {
  ARTICLES,
  CATEGORIES,
  PHOTOS,
  filterArticles,
  readingTime,
} from '../data/blogArticles';

import '../styles/engix-blog.css';

const PAGE_SIZE = 6;

function BlogImage({
  name,
  decorative = false,
  priority = false,
  className = '',
}) {
  const [attempt, setAttempt] = useState(0);
  const photo = PHOTOS[name];

  if (attempt > 1) {
    return (
      <div
        className={`eb-image-fallback ${className}`}
        role={decorative ? undefined : 'img'}
        aria-label={decorative ? undefined : photo.alt}
        aria-hidden={decorative ? true : undefined}
      >
        <Globe2 size={48} aria-hidden="true" />
      </div>
    );
  }

  const src =
    attempt === 0
      ? `${import.meta.env.BASE_URL}images/blog/${photo.file}`
      : `https://images.unsplash.com/${photo.id}?auto=format&fit=crop&w=1600&q=85`;

  return (
    <img
      src={src}
      alt={decorative ? '' : photo.alt}
      className={className}
      width="1600"
      height="1067"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setAttempt((value) => value + 1)}
    />
  );
}

function ArticleCard({ article, onRead }) {
  return (
    <article className="eb-card">
      <button
        className="eb-card-photo"
        type="button"
        aria-label={`Read ${article.title}`}
        onClick={(event) => onRead(article, event)}
      >
        <BlogImage name={article.image} />
      </button>

      <div className="eb-card-body">
        <div className="eb-meta">
          <span>{article.category}</span>
          <span>{readingTime(article)}</span>
        </div>

        <h3>
          <button
            type="button"
            onClick={(event) => onRead(article, event)}
          >
            {article.title}
          </button>
        </h3>

        <p>{article.excerpt}</p>

        <button
          className="eb-text-button"
          type="button"
          onClick={(event) => onRead(article, event)}
        >
          Read article
          <ArrowUpRight size={19} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default function Blog() {
  usePageTitle('Blogs & Resources');

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [activeArticle, setActiveArticle] = useState(null);

  const articlesRef = useRef(null);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  useEffect(() => {
    if (!activeArticle || !dialogRef.current) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;

    if (!dialog.open) dialog.showModal();

    dialog.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      if (dialog.open) dialog.close();

      document.body.style.overflow = previousOverflow;

      if (openerRef.current?.isConnected) {
        openerRef.current.focus();
      }
    };
  }, [activeArticle]);

  const filtered = useMemo(
    () => filterArticles(query, category),
    [query, category]
  );

  const pageCount = Math.max(
    1,
    Math.ceil(filtered.length / PAGE_SIZE)
  );

  const currentPage = Math.min(page, pageCount);

  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const featured = ARTICLES.find(
    (article) => article.id === 'technical-seo-checklist'
  );

  const selections = [
    'ai-workflow-automation',
    'custom-software-or-existing-tools',
    'brand-consistency-digital-channels',
  ].map((id) => ARTICLES.find((article) => article.id === id));

  function scrollToArticles() {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    articlesRef.current?.scrollIntoView({
      block: 'start',
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  }

  function selectCategory(value, scroll = false) {
    setCategory(value);
    setPage(1);

    if (scroll) {
      setQuery('');
      scrollToArticles();
    }
  }

  function resetFilters() {
    setQuery('');
    setCategory('All');
    setPage(1);
  }

  function openArticle(article, event) {
    openerRef.current = event.currentTarget;
    setActiveArticle(article);
  }

  function closeArticle() {
    setActiveArticle(null);
  }

  function changePage(number) {
    setPage(number);
    scrollToArticles();
  }

  return (
    <div className="engix-blog-page">
      <section className="eb-hero" aria-labelledby="eb-title">
        <BlogImage
          name="hero"
          decorative
          priority
          className="eb-hero-background"
        />

        <div className="eb-shell eb-hero-content">
          

          <span className="eb-eyebrow">
            THE ENGIX KNOWLEDGE HUB
          </span>

          <h1 id="eb-title">
            Technology Insights.
            <br />
            Marketing Perspectives.
            <br />
            Practical Business Decisions.
          </h1>

          <p>
            Explore guides on software development, AI, cloud,
            websites and digital marketing — written to help
            businesses clarify requirements and plan useful
            next steps.
          </p>

          <div className="eb-actions">
            <a
              className="eb-button eb-yellow"
              href="#eb-articles"
            >
              Browse the insights
              <BookOpen size={20} aria-hidden="true" />
            </a>

            <Link
              className="eb-button eb-outline"
              to="/contact"
            >
              Discuss your requirements
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

     

      <section
        className="eb-section"
        aria-labelledby="eb-featured-title"
      >
        <div className="eb-shell eb-feature-layout">
          <div>
            <div className="eb-heading">
              <span className="eb-eyebrow">
                FEATURED GUIDE
              </span>

              <h2 id="eb-featured-title">
                A Stronger Foundation for Your Website
              </h2>

              <p>
                Start with the pages, journeys and measurements
                that matter to your business.
              </p>
            </div>

            <article className="eb-featured">
              <button
                className="eb-featured-photo"
                type="button"
                aria-label={`Read ${featured.title}`}
                onClick={(event) =>
                  openArticle(featured, event)
                }
              >
                <BlogImage name={featured.image} />
              </button>

              <div className="eb-featured-body">
                <div className="eb-meta">
                  <span>{featured.category}</span>
                  <span>{readingTime(featured)}</span>
                </div>

                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>

                <div className="eb-takeaway">
                  <strong>Key perspective</strong>
                  <p>{featured.takeaway}</p>
                </div>

                <button
                  className="eb-button"
                  type="button"
                  onClick={(event) =>
                    openArticle(featured, event)
                  }
                >
                  Read the guide
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          </div>

          <aside
            className="eb-sidebar"
            aria-label="Browse article topics"
          >
            <h3>Explore Topics</h3>

            <p>
              Find relevant ideas across development,
              operations and marketing.
            </p>

            <div className="eb-topic-list">
              {CATEGORIES.filter(
                (item) => item !== 'All'
              ).map((item) => (
                <button
                  type="button"
                  key={item}
                  aria-pressed={category === item}
                  onClick={() =>
                    selectCategory(item, true)
                  }
                >
                  <span>{item}</span>

                  <span className="eb-count">
                    {
                      ARTICLES.filter(
                        (article) =>
                          article.category === item
                      ).length
                    }
                  </span>
                </button>
              ))}
            </div>

            <div className="eb-sidebar-note">
              <h3>From Reading to Planning</h3>

              <p>
                Record your questions, current setup and
                priorities before deciding which services
                your business needs.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {!query.trim() && category === 'All' && (
        <section
          className="eb-section eb-green"
          aria-labelledby="eb-guides-title"
        >
          <div className="eb-shell">
            <div className="eb-heading">
              <span className="eb-eyebrow">
                SELECTED BUSINESS GUIDES
              </span>

              <h2 id="eb-guides-title">
                Connect Technology Choices with Business
                Context
              </h2>

              <p>
                Explore how a focused workflow, a clear
                software brief and consistent communication
                can shape a more useful engagement.
              </p>
            </div>

            <div className="eb-card-grid">
              {selections.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onRead={openArticle}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section
        id="eb-articles"
        ref={articlesRef}
        className="eb-section"
        aria-labelledby="eb-articles-title"
      >
        <div className="eb-shell">
          <div className="eb-heading">
            <span className="eb-eyebrow">
              BLOGS & RESOURCES
            </span>

            <h2 id="eb-articles-title">
              Practical Guides for Your Digital Priorities
            </h2>

            <p>
              Browse engineering, design, AI, operations and
              digital marketing topics. Open a guide to read
              the full article and its practical checklist.
            </p>
          </div>

          <div
            className="eb-filters"
            aria-label="Filter articles by topic"
          >
            {CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                className={
                  category === item ? 'is-active' : ''
                }
                aria-pressed={category === item}
                onClick={() => selectCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="eb-results">
            <p
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {filtered.length}{' '}
              {filtered.length === 1
                ? 'article'
                : 'articles'}{' '}
              found
              {category !== 'All'
                ? ` in ${category}`
                : ''}
            </p>

            {(query || category !== 'All') && (
              <button
                className="eb-text-button"
                type="button"
                onClick={resetFilters}
              >
                Clear filters
              </button>
            )}
          </div>

          {visible.length ? (
            <div className="eb-card-grid">
              {visible.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onRead={openArticle}
                />
              ))}
            </div>
          ) : (
            <div className="eb-empty">
              <Search size={34} aria-hidden="true" />
              <h3>No Matching Articles</h3>
              <p>
                Try a different keyword or browse all topics.
              </p>

              <button
                className="eb-button"
                type="button"
                onClick={resetFilters}
              >
                View all articles
              </button>
            </div>
          )}

          {pageCount > 1 && (
            <nav
              className="eb-pagination"
              aria-label="Article pagination"
            >
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() =>
                  changePage(currentPage - 1)
                }
              >
                Previous
              </button>

              {Array.from(
                { length: pageCount },
                (_, index) => index + 1
              ).map((number) => (
                <button
                  type="button"
                  key={number}
                  aria-label={`Page ${number}`}
                  aria-current={
                    currentPage === number
                      ? 'page'
                      : undefined
                  }
                  className={
                    currentPage === number
                      ? 'is-active'
                      : ''
                  }
                  onClick={() => changePage(number)}
                >
                  {number}
                </button>
              ))}

              <button
                type="button"
                disabled={currentPage === pageCount}
                onClick={() =>
                  changePage(currentPage + 1)
                }
              >
                Next
              </button>
            </nav>
          )}

          {filtered.length > 0 && (
            <p className="eb-showing">
              Showing{' '}
              {(currentPage - 1) * PAGE_SIZE + 1}–
              {Math.min(
                currentPage * PAGE_SIZE,
                filtered.length
              )}{' '}
              of {filtered.length} articles
            </p>
          )}
        </div>
      </section>

      <section
        className="eb-section eb-soft"
        aria-labelledby="eb-perspective-title"
      >
        <div className="eb-shell eb-split">
          <figure className="eb-photo">
            <BlogImage name="planning" />

            <figcaption>
              Representative photograph of professional
              collaboration.
            </figcaption>
          </figure>

          <div>
            <span className="eb-eyebrow">
              THE ENGIX PERSPECTIVE
            </span>

            <h2 id="eb-perspective-title">
              Good Decisions Connect the Technical and the
              Commercial
            </h2>

            <p>
              A website, application or campaign works within
              a wider business journey. Design, engineering,
              content and measurement should reflect the
              people using it and the team responsible for
              managing it.
            </p>

            <p>
              Engix Tech Private Limited brings IT services
              and digital marketing capabilities together
              around your requirements. We discuss your
              current setup, priorities and responsibilities
              before defining the engagement.
            </p>

            <Link
              className="eb-text-button"
              to="/services"
            >
              View our capabilities
              <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="eb-section eb-contact"
        aria-labelledby="eb-contact-title"
      >
        <div className="eb-shell eb-contact-grid">
          <div>
            <span className="eb-eyebrow">
              TURN INSIGHT INTO A PRACTICAL NEXT STEP
            </span>

            <h2 id="eb-contact-title">
              Let’s Discuss the Challenge Behind Your Next
              Project
            </h2>

            <p>
              Share your requirements, existing systems and
              business priorities. We will discuss the
              relevant services, proposed scope and next
              steps.
            </p>
          </div>

          <Link className="eb-button" to="/contact">
            Discuss your project
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="eb-reader"
        aria-labelledby={
          activeArticle ? 'eb-reader-title' : undefined
        }
        onCancel={(event) => {
          event.preventDefault();
          closeArticle();
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;

          const bounds =
            event.currentTarget.getBoundingClientRect();

          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          ) {
            closeArticle();
          }
        }}
      >
        {activeArticle && (
          <article>
            <div className="eb-reader-toolbar">
              <span>ENGIX INSIGHTS</span>

              <button
                ref={closeRef}
                type="button"
                onClick={closeArticle}
              >
                Close article
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <BlogImage
              key={activeArticle.id}
              name={activeArticle.image}
              priority
              className="eb-reader-photo"
            />

            <div className="eb-reader-body">
              <span className="eb-eyebrow">
                {activeArticle.category}
              </span>

              <h2 id="eb-reader-title">
                {activeArticle.title}
              </h2>

              <div className="eb-meta">
                <span>Engix Insights</span>
                <span>{readingTime(activeArticle)}</span>
              </div>

              <p className="eb-reader-intro">
                {activeArticle.excerpt}
              </p>

              <aside className="eb-takeaway">
                <strong>Key takeaway</strong>
                <p>{activeArticle.takeaway}</p>
              </aside>

              {activeArticle.sections.map((section) => (
                <section
                  className="eb-reader-section"
                  key={section.heading}
                >
                  <h3>{section.heading}</h3>
                  <p>{section.text}</p>
                </section>
              ))}

              <section className="eb-reader-section">
                <h3>Put the Guide into Practice</h3>

                <p>{activeArticle.nextSteps.text}</p>

                <ul className="eb-checklist">
                  {activeArticle.nextSteps.checklist.map(
                    (item) => (
                      <li key={item}>
                        <CheckCircle2
                          size={18}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </section>

              <div className="eb-reader-footer">
                <h3>
                  Discuss Your Requirements with Engix
                </h3>

                <p>
                  Share your current situation, questions
                  and priorities so we can discuss a
                  practical scope of work.
                </p>

                <Link
                  className="eb-button"
                  to="/contact"
                  onClick={closeArticle}
                >
                  Contact Engix
                  <ArrowUpRight
                    size={19}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </article>
        )}
      </dialog>
    </div>
  );
}