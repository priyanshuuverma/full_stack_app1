import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Real-Time Pose Detection',
    description:
      'AI-powered feedback to correct posture and form.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Progress Tracking & Analytics.',
    description: 'Monitor workouts, calories, and improvements.',
    icon: LockClosedIcon,
  },
  {
    name: 'Mid-Care & Wellness Support',
    description: 'Stress management, sleep tracking, and recovery tips.',
    icon: ServerIcon,
  },
]

export default function Homepage2() {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Benefits & Perks
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              By using our AI-driven fitness platform, you gain access to a personalized virtual coach that tailors workouts and nutrition plans based on your goals, fitness level, and preferences.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://img.freepik.com/free-photo/data-stats-around-person-doing-physical-activity_23-2150165164.jpg?ga=GA1.1.1697140792.1734711011&semt=ais_hybrid"
            width={2432}
            height={1442}
            className="w-[44rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
