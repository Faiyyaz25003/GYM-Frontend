
export default function PlanCard({ plan }) {
  return (
    <div className="bg-white border shadow hover:shadow-xl rounded-2xl p-6 transition-all duration-300">
      <h2 className="text-xl font-semibold text-center mb-2">{plan.name}</h2>

      <div className="text-3xl font-bold text-center text-indigo-600">${plan.price}</div>
      <div className="text-sm text-center text-gray-500">{plan.duration}</div>

      <div className="mt-2 text-center">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
          {plan.type.toUpperCase()}
        </span>
      </div>

      <ul className="mt-4 space-y-2">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
            <span className="text-green-500">✔️</span>
            {feature}
          </li>
        ))}
      </ul>

      {plan.description && (
        <p className="mt-4 text-sm text-gray-600 italic border-t pt-3">
          {plan.description}
        </p>
      )}
    </div>
  );
}
