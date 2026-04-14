import usePageTitle from '../hooks/usePageTitle';
import Button from '../components/common/Button';
import Container from '../components/common/Container';

export default function NotFound() {
  usePageTitle('Not Found');

  return (
    <section className="section-space">
      <Container>
        <div className="not-found-box">
          <h1>404</h1>
          <p>Page not found.</p>
          <Button to="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}