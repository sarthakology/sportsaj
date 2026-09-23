import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { seoCopy } from '../content';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description={seoCopy.privacyDescription}
        breadcrumb="Privacy Policy"
        noIndex
      />
      <PageHeader title="Privacy Policy" breadcrumb="Privacy Policy" />
      <section className="section-py bg-white min-h-[40vh]">
        <div className="page-container max-w-3xl">
          <Reveal>
            <p className="prose-copy">Privacy Policy content to be added.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
