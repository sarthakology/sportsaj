import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

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
          {/* Add Terms and Conditions content here */}
        </div>
      </section>
    </>
  );
}
