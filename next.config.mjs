/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*", // Source URL pattern
        destination: process.env.NEXT_API_URL + "/:path*", // Destination with the :path* wildcard
      },
    ];
  },
};

export default withNextIntl(nextConfig);
