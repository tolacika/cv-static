import { TextSourceType } from "@/pages";

const ContactDetails = ({ data }: { data: TextSourceType }) => {
  return (
    <div className="container py-16 md:py-20" id="contact">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        {data.contactDetails.title}
      </h2>
      <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        {data.contactDetails.subTitle}
      </h4>
      <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
        <p className="font-body text-grey-10">
          {data.contactDetails.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 pt-16 gap-4 whitespace-nowrap">
        {data.contactDetails.items.map((item, idx) => {
          return (
            <div key={idx} className="w-full shadow-lg p-4 sm:py-4">
              <div className="flex items-center">
                <i className={`bx ${item.icon} text-2xl text-grey-40`}></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  {item.head}
                </p>
              </div>
              {item.link ? (
                <a
                  href={item.link} target={item.target ?? "_blank"} rel="noreferrer"
                  className="pt-2 text-left font-body font-bold text-primary lg:text-lg block"
                >
                  {item.text}
                </a>
              ) : (
                <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                  {item.text}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactDetails;