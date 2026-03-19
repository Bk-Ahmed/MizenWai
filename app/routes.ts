import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("blog", "routes/blog.tsx"),
  route("cbk", "routes/cbk.tsx"),
  route("contact", "routes/contact.tsx"),
  route("digital-growth", "routes/digital-growth.tsx"),
  route("ecosystem", "routes/ecosystem.tsx"),
  route("intelligence-systems", "routes/intelligence-systems.tsx"),
  route("philosophy", "routes/philosophy.tsx"),
  route("client-stories", "routes/client-stories.tsx"),
] satisfies RouteConfig;
