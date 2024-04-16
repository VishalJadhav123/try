function AddTodo() {
  return (<div className="container">
    <div className="row vj-row">
      <div class="col-6">
        <input type="text" name="" id="" placeholder="Enter todo here" />
      </div>
      <div class="col-4">
        <input type="date" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success vj-button">
          Add
        </button>
      </div>
    </div>
    </div>
  );
}

export default AddTodo;
