import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions — Sports AJ."
        breadcrumb="Terms and Conditions"
      />
      <PageHeader title="Terms and Conditions" breadcrumb="Terms and Conditions" />
      <section className="section-py bg-white min-h-[40vh]">
        <div className="page-container max-w-3xl">
          <Reveal>
            <p className="prose-copy">Terms and Conditions content to be added.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
