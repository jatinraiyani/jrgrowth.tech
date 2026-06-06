export default function GoogleMap() {
  return (
    <div className="relative w-full h-[450px] overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-200/50">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56798.96324881726!2d72.90334465815573!3d20.599229966730544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c37ad35d25ad%3A0x521f02dc9b82316f!2sJatin%20Raiyani%20%7C%20AI%20Powered%20SEO%20%26%20Local%20SEO%20Expert!5e1!3m2!1sen!2sin!4v1780728465513!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
