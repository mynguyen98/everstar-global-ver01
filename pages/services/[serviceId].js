import HeroPage from "../../components/services-page/hero";
import Business from "../../components/services-page/business/business";
import { business } from "../../data/business-data";
import { useRouter } from "next/router";
import Link from "next/link";
export default function ServiceDetail({ business, sid }) {
  const { locale } = useRouter();
  console.log(locale);
  console.log(business[locale]);
  return (
    <div>
      <HeroPage />
      <Business business={business[locale]} sid={sid} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const businessId = params.serviceId;
  console.log(business);
  const datas = business.find((business) => business.sid === businessId);
  return {
    props: {
      business: datas,
      sid: businessId,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { serviceId: "app-developing" },
        locale: "kr-KR",
      },
      {
        params: { serviceId: "app-developing" },
        locale: "en-US",
      },
      {
        params: { serviceId: "app-publishing" },
        locale: "kr-KR",
      },
      {
        params: { serviceId: "app-publishing" },
        locale: "en-US",
      },
    ],
    fallback: false,
  };
}
