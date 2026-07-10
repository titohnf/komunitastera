const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
];

const CONTACT_ITEMS = [
  { text: "teralearningcenter.id@gmail.com" },
  { text: "@insantera", href: "https://www.instagram.com/insantera" },
];

export default function Footer() {
  return (
    <tera-footer
      site="komunitas"
      logo-text="Tera"
      logo-img="/logo.png"
      description="Ruang bagi guru dan tutor di Indonesia untuk belajar bareng, saling mendukung, dan merayakan kerja mendidik."
      nav={JSON.stringify(NAV_ITEMS)}
      contact={JSON.stringify(CONTACT_ITEMS)}
    />
  );
}
