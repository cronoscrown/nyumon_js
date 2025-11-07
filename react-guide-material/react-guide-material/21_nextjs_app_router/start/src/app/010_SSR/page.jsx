import Client from "./components/ClientPage.jsx";

function SSR() {
  return (
    <>
      <Client />
      <div>SSRのページです</div>
    </>
  );
}
export default SSR;
