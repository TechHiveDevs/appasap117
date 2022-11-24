
import show from "./show.follower";
import create from "./create.follower";
import edit from "./edit.follower";
import list from "./list.follower";

export default { 
  name: "follower",
  label: "follower",
  hide: false,
  create,
  edit,
  list,
  show,
}