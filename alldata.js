function AllData(){
  const ctx = React.useContext(UserContext);

  <h5>All Data in Store</h5>
  return (
    <>
    <Card
      bgcolor="primary"
      header="All Data"
      body={JSON.stringify(ctx)}
    />
    </>
  );
}
