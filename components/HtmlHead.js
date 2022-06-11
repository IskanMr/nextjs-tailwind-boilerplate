import Head from "next/head";

export default function HtmlHead(props) {
  return (
    <Head>
      <title>{`${props.title} · SBM-22`}</title>
      <meta name="description" content={props.description} />
    </Head>
  );
}
