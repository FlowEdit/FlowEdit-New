import Link from "next/link";

type AnnouncementBannerProps = {
  className?: string;
};

const tickerItems = Array.from({ length: 4 });

function AnnouncementMessage({ tabIndex }: { tabIndex?: number }) {
  return (
    <span className="announcement-ticker__item mx-8 inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap">
      <span>
        🚧 FlowEdit is currently undergoing exciting improvements. During this
        transition, all video editing services remain fully available through
        our
      </span>
      <Link
        href="/pricing"
        className="font-bold underline underline-offset-2"
        tabIndex={tabIndex}
      >
        Pricing
      </Link>
      <span>
        page. Thank you for your patience as we continue building the best
        editing experience possible.
      </span>
    </span>
  );
}

export default function AnnouncementBanner({
  className = "",
}: AnnouncementBannerProps) {
  return (
    <aside
      className={`relative z-20 flex h-11 w-full items-center overflow-hidden border-b border-white/20 bg-gradient-to-r from-[#315FE4] via-[#6B7DF5] to-[#8B5CF6] text-white shadow-[0_8px_20px_-18px_rgba(17,24,39,0.9)] md:h-12 ${className}`}
      aria-label="Site announcement"
    >
      <div className="announcement-ticker__track flex items-center text-xs font-semibold leading-none sm:text-sm">
        <div className="announcement-ticker__group">
          {tickerItems.map((_, index) => (
            <AnnouncementMessage key={`primary-${index}`} />
          ))}
        </div>
        <div
          className="announcement-ticker__group announcement-ticker__group--duplicate"
          aria-hidden="true"
        >
          {tickerItems.map((_, index) => (
            <AnnouncementMessage key={`duplicate-${index}`} tabIndex={-1} />
          ))}
        </div>
      </div>
    </aside>
  );
}
