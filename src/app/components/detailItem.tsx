interface IdetailItem {
  title: string;
  description: string;
}

export default function DetailItem({ title, description }: IdetailItem) {
  return (
    <div className="flex py-2.5 px-2 dark:bg-dark-background/35 bg-white rounded-md text-lg mb-1">
      <h3 className="font-semibold text-light-primary dark:text-dark-blue-200">
        {title}
      </h3>
      {description != "" && (
        <p className="w-full text-right text-light-schema-text dark:text-white">{description}</p>
      )}
    </div>
  );
}
