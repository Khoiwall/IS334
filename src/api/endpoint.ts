// const mainApi = `https://9070-2001-ee0-5200-8960-99da-8f8f-cf6a-560e.ap.ngrok.io`;
//const mainApi = `http://localhost:3000`;
const mainApi = process.env.NEXT_PUBLIC_ENDPOINT as string; //"https://api-staging.metastream.live";
// const mainApi = `https://be-metastream.vercel.app`;
// const mainApi = `https://staging-beta-stream.vercel.app/`;
// const mainApi = `https://bemoi.vercel.app/`;
// const mainApi = `https://18d3-115-79-141-239.ap.ngrok.io`;
// const mainApi = `http://103.142.139.104:3001`;
// const mainApi = `https://bemoi.vercel.app/`;
export { mainApi };
