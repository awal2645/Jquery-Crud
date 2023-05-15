$(document).ready(function () {
  let i = 1;

  $("#btnAdd").click(function () {
    let addData = createPost()
      .replace("$[Id]",  i++)
      .replace("$[Name]", $("#name").val())
      .replace("$[action]", "Edit")
      .replace("$[Delete]", "Delete");
    $("#table_td").append(addData);
    $("#form")[0].reset();
  });

  $("#btnUpdate").click(function () {
    let UpdateData = createPost()
      .replace("$[Id]", $("#txtId").val())
      .replace("$[Name]", $("#name").val())
      .replace("$[action]", "Edit")
      .replace("$[Delete]", "Delete");
    $("#table_td").append(UpdateData);
    $("#btnAdd").show();
    $("#btnUpdate").hide();
    $("#name").val("");
    $("#form")[0].reset();
  });

  $(document).on("click", "#edit", function () {
    $("#btnAdd").hide();
    $("#btnUpdate").show();
    $("#txtId").show();
    $("#txtId").val($(this).parent().parent().find(".Id").html());
    $("#name").val($(this).parent().parent().find(".Name").html());
    $(this).parents("tr").remove();
    $("#btnUpdate").focus();
  });

  $(document).on("click", "#delete", function () {
    $(this).parents("tr").remove();
  });
});

function createPost() {
  return (
    "<tr><td class='Id'>$[Id]</td>" +
    "<td class='Name'>$[Name]</td>" +
    "<td class='action'><a href='#' class=' ml-5' id='edit'> <i  class='fas fa-edit'></i>  </a> <a href='#' id='delete'><i class='fas fa-trash-alt'></i></a></td></tr>"
  );
}
