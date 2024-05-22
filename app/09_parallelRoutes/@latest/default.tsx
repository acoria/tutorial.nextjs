/**
 * Default fallback content when there is no explicit route defined (such as for the year in the news route).
 * If the page.tsx content is the same as the default one, the page.tsx can be deleted and only default is used.
 */
export default function Latest() {
  return <span>{`Content in 'latest'`}</span>;
}
