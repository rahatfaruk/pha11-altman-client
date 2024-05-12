function SectionTitle({title}) {
  return (
    <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-semibold text-center dark:text-gray-200">
      <span className="border-t-2 border-cyan-600">{title}</span>
    </h2>
  );
}

export default SectionTitle;