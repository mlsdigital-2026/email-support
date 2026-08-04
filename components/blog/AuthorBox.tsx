import Image from "next/image";

export default function AuthorBox() {
  return (
    <section className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-8">

      <div className="flex flex-col gap-6 md:flex-row md:items-center">

        <Image
          src="/images/logo.png"
          alt="SBC Mail Me"
          width={90}
          height={90}
          className="rounded-2xl border bg-white p-3"
        />

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            SBC Mail Me Team
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            SBC Mail Me publishes educational resources about email
            password recovery, email security, account protection,
            email setup, and best practices. Our goal is to help users
            better understand email services and improve the security
            of their online accounts through clear, easy-to-follow
            guides.
          </p>

        </div>

      </div>

    </section>
  );
}