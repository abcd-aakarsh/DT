const data = {
  _id: { $oid: "63b64dc9e3b230ebb60a495d" },
  _key: "topic:2085",
  category: "Course",
  cid: { $numberDouble: "NaN" },
  commitment: "4 hours",
  commitment_type: "custom",
  deadline: "",
  description:
    "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p><p>Let's prepare Sandwiches, we will use Pareto’s Law. That’s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p><p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p><p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p><p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
  faqs: [],
  globalTags: [],
  isActive: true,
  lastposttime: 0,
  learning_outcomes: [
    "Bare minimum knowledge of project management",
    "4SA Concept",
    "Would be able to handle any project efficiently",
  ],
  mainPid: 0,
  postcount: 0,
  pre_requisites: [
    "An open mind to learn any concept",
    "Thought of Unlearning and Relearning ",
  ],
  project_image:
    "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
  short_description:
    "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
  slug: "2085/technical-project-management",
  status: "published",
  tasks: [
    {
      task_id: 18882,
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      status: "notworkyet",
      assets: [
        {
          asset_id: 18883,
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
          asset_content: " https://www.youtube.com/embed/TiMRwri1xJ8",
          asset_type: "display_asset",
          asset_content_type: "video",
        },
        {
          asset_id: 18884,
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and thread build, and jot out key threads while watching that video.",
          asset_content: " ",
          asset_type: "input_asset",
          asset_content_type: "threadbuilder",
        },
        {
          asset_id: 18885,
          asset_title: "Assignment",
          asset_description:
            "Explore the agile method of project management and prepare a ppt for 15 minutes covering the 4SA approach. Do you want to explore?",
          asset_content: " ",
          asset_type: "input_asset",
          asset_content_type: "upload",
        },
      ],
    },
  ],
  tid: { $numberInt: "2085" },
  timestamp: { $numberLong: "1672871625713" },
  title: "Technical Project Management",
  type: "gyaan",
  user: { $numberInt: "232146" },
  viewcount: { $numberInt: "48" },
};

document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.getElementById("grid-container");
  const sidebarMain = document.getElementById("sidebar-main");
  let tasksHTML = "";
  let sidebarHTML = `<ul class="sidebar-content">`;
  data.tasks.forEach((task) => {
    sidebarHTML += `<li class="pointer"><b>${task.task_title}</b><ul>`;
    task.assets.forEach((asset) => {
      sidebarHTML += `<li>${asset.asset_title}</li>`;
    });
    sidebarHTML += `</ul></li>`;
  });

  sidebarHTML += `</ul>`;
  data.tasks[0].assets.forEach((asset) => {
    tasksHTML += `
      <div class="grid-item">
        <div class="grid-item-top">
          <h3 class="asset-heading">${asset.asset_title}</h3>
        </div>
        <div class="grid-item-bottom">
          <p><b>Description: </b>${asset.asset_description}</p>
    `;

    if (
      asset.asset_type === "display_asset" &&
      asset.asset_content_type === "video"
    ) {
      const videoUrl = asset.asset_content.trim();
      tasksHTML += `
          <div class="asset-video">
            <iframe width="100%" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
          </div>
      `;
    } else {
      tasksHTML += `
      <div><p>Loading Soon...</p></div>`;
    }

    tasksHTML += `
        </div>
      </div>
    `;
  });
  sidebarMain.innerHTML = sidebarHTML;
  gridContainer.innerHTML = tasksHTML;
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const barname = document.getElementById("barname");
  sidebar.classList.toggle("open");
  const icon = sidebar.querySelector(".toggle-btn i");
  if (sidebar.classList.contains("open")) {
    icon.classList.remove("fa-arrow-right");
    icon.classList.add("fa-arrow-left");
  } else {
    icon.classList.remove("fa-arrow-left");
    icon.classList.add("fa-arrow-right");
  }
}
