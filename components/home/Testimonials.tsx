import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "/avatars/user1.jpg",
    review:
      "The recovery guide was easy to understand and helped me find the official password reset steps quickly.",
  },
  {
    id: 2,
    name: "David Miller",
    role: "Freelancer",
    image: "/avatars/user2.jpg",
    review:
      "Everything was organized clearly. The provider-specific information saved me time while resolving my login issue.",
  },
  {
    id: 3,
    name: "Emily Wilson",
    role: "Student",
    image: "/avatars/user3.jpg",
    review:
      "I appreciated the email security recommendations. The explanations were simple and easy to follow.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            What Visitors Say
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Feedback from people who found our educational resources useful for
            understanding common email account issues.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Stars */}

              <div className="mb-6 flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>

                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}