// TOGGLE JOB OVERVIEW CARDS
$("#job").change(function(){
  if($("#job").val() === "default")
  {
    $("#job").addClass("drop-placeholder").blur();
  } else {
    $("#job").removeClass("drop-placeholder");
  }
});

// APPLICATION navigation
var pageNum = 1;
var btn = ".app-nav-btn";
var pageId = "#app-page";

$(btn).click(function(){
  $(pageId+pageNum).prop('hidden', true);

  if($(this).hasClass('next'))
  {
    pageNum++;
  }else {
    pageNum--;
  }

  $(pageId+pageNum).removeAttr('hidden');

  switch (pageNum) {
    case 1:
      $("p.card-category").text("Applicant Information");
      break;
    case 2:
      $("p.card-category").text("Work Experience");
      break;
    case 3:
      $("p.card-category").text("Education");
      break;
    case 4:
      $("p.card-category").text("Qualifications");
      break;
    case 5:
      $("p.card-category").text("Background Information");
      break;
      case 6:
        $("p.card-category").text("Job-Related Questions");
        break;
    default:
      $("p.card-category").text(" ");
  }
});

// ADD JOB EXPERIENCE section
var numOfJobs = 1;
$("#add-experience").click(function(){
  if(numOfJobs < 3)
  {
    $("#add-job").before("<div class=\"row\"><div class=\"col\"><div class=\"form-group\"><label class=\"bmd-label-floating\">Company Name</label><input type=\"text\" class=\"form-control\"></div></div></div><div class=\"row\"><div class=\"col-md-4 mt-4\"><div class=\"form-group\"><label class=\"bmd-label-floating\">Job Title</label><input type=\"text\" class=\"form-control\"></div></div><div class=\"col-md-4\"><div class=\"form-group\"><label class=\"bmd-lable-floating\">Start Date</label><input type=\"date\"></div></div><div class=\"col-md-4\"><div class=\"form-group\"><label class=\"bmd-lable-floating\">End Date</label><input type=\"date\"></div></div></div><div class=\"row\"><div class=\"col-md-12\"><div class=\"form-group\"><label class=\"bmd-label-floating\">Responsibilities</label><textarea name=\"responsibilities\" class=\"form-control\" rows=\"4\" cols=\"50\"></textarea></div></div></div>");
    numOfJobs++;
  } else {
    alert("Max number of jobs added.");
  }
});
