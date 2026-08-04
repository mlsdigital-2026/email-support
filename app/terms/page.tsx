export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Terms of Service
        </span>

        <h1 className="mt-6 text-5xl font-bold text-slate-900">
          Terms of Service
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Last Updated: August 2026
        </p>

        <div className="prose prose-slate mt-12 max-w-none">
          <h2>Educational Purpose</h2>
          <p>
            This website provides educational information related to email
            account recovery, password assistance, and
            security awareness.
          </p>

          <h2>No Official Affiliation</h2>
          <p>
            This website is an independent educational resource and is not
            affiliated with any email provider or technology company.
          </p>

          <h2>Use of Content</h2>
          <p>
            The information provided is for educational purposes only and should
            not replace official  documentation.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            We are not responsible for any actions taken based on the
            information available on this website.
          </p>

          <h2>Changes</h2>
          <p>
            These terms may be updated periodically without prior notice.
          </p>
        </div>
      </section>
    </main>
  );
}