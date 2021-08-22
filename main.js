"use strict;";

class MainPage {
  constructor() { }

  get get_was_count_node() {
    return document.getElementsByClassName("node").length;
  }

  get get_now_count_node() {
    return new Field().object_inside.length;
  }
}

class TopSetting extends MainPage {
  constructor(count_node) {
    super();
    this.count_node = count_node;
  }

  handler_start() {
    document.body.addEventListener("click", function (e) {
      if (e.target.id == "btnOptionsNode") {
        document.getElementById("start_dropdown").classList.toggle("show");
      }
      if (e.target.id == "add_node") {
        new BottomPanelTools().create_set_nodes(1);
      } else if (e.target.id == "delete_node") {
        console.log(2);
      }

      if (e.target.parentElement.id == "start_dropdown" && !e.target.matches(".interface")) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          if (dropdowns[i].classList.contains('show')) {
            dropdowns[i].classList.remove('show');
          }
        }
      }
    });
  }
}

var TS = new TopSetting(10);
TS.handler_start()

class Field extends MainPage {
  constructor() {
    super();
  }

  get rect_border_field() {
    return document.getElementById("field").getBoundingClientRect();
  }

  get object_inside() {
    let elems = document.getElementsByClassName("node draggable");
    let include_elems = [];
    for (let i = 0; i < elems.length; i++) {
      let rect_elem = elems[i].getBoundingClientRect();
      if (
        this.rect_border_field.left < rect_elem.left &&
        this.rect_border_field.right > rect_elem.right &&
        this.rect_border_field.top < rect_elem.top &&
        this.rect_border_field.bottom > rect_elem.bottom
      ) {
        include_elems.push(elems[i]);
      }
    }
    return include_elems;
  }

  change_state_field() {
    let nodes_include = this.object_inside;
    this.one_elem_click_processing(nodes_include);
  }

  one_elem_click_processing(nodes_include) {
    for (let i = 0; i < nodes_include.length; i++) {
      if (nodes_include[i].hasAttribute("data-id")) {
        nodes_include[i].setAttribute(
          "class",
          "node draggable field mark save"
        );
      } else if (nodes_include[i].children.length > 1) {
        nodes_include[i].setAttribute("class", "node draggable field mark");
      } else {
        nodes_include[i].setAttribute("class", "node draggable field");
      }
    }
  }
}

var F = new Field();

class BottomPanelTools extends MainPage {
  constructor() {
    super();
  }

  create_min_menu(new_div) {
    let new_div_menu_dropdown = document.createElement("DIV");
    new_div_menu_dropdown.setAttribute("id", "dropdown");
    new_div.appendChild(new_div_menu_dropdown);
    new_div_menu_dropdown = this.create_new_field(new_div_menu_dropdown);
    new_div_menu_dropdown = this.btn_create_new_field(new_div_menu_dropdown);
    let new_div_menu_dropdown_btn = document.createElement("BUTTON");
    new_div_menu_dropdown_btn.setAttribute("class", "card");
    new_div_menu_dropdown_btn.setAttribute("id", "btnOptionsNode");
    new_div_menu_dropdown_btn.innerHTML = "+";
    new_div_menu_dropdown.appendChild(new_div_menu_dropdown_btn);
    let new_div_menu_start_dropdown = document.createElement("DIV");
    new_div_menu_start_dropdown.setAttribute("id", "start_dropdown");
    new_div_menu_start_dropdown.setAttribute("class", "dropdown-content");
    new_div_menu_dropdown_btn.after(new_div_menu_start_dropdown);
    let new_div_menu_a_add_node = document.createElement("A");
    new_div_menu_a_add_node.setAttribute("id", "add_node");
    new_div_menu_a_add_node.innerHTML = "Add Field";
    new_div_menu_start_dropdown.appendChild(new_div_menu_a_add_node);
    let new_div_menu_a_delete_node = document.createElement("A");
    new_div_menu_a_delete_node.setAttribute("id", "delete_node");
    new_div_menu_a_delete_node.innerHTML = "Delete";
    new_div_menu_a_add_node.after(new_div_menu_a_delete_node);
    return new_div;
  }

  create_new_field(new_div_menu_dropdown){
    let create_field_popup_btn = document.createElement("BUTTON");
    create_field_popup_btn.setAttribute("class", "create_field_popup");
    new_div_menu_dropdown.after(create_field_popup_btn);
    create_field_popup_btn.innerHTML = "new field";
    return new_div_menu_dropdown;
  }

  btn_create_new_field(new_dev_menu_dropdown){
    let popup_button = document.createElement("BUTTON");
    popup_button.setAttribute("class", "popup_button");
    new_dev_menu_dropdown.appendChild(popup_button);
    popup_button.innerHTML = '+';
    return new_dev_menu_dropdown;
  }

  create_set_nodes(count_node) {
    let was_count_nodes = this.get_was_count_node;
    let need_count_nodes = was_count_nodes + parseInt(count_node);
    var start_tag = document.getElementById("init_date");
    var new_div, old_p, new_p, new_br;

    if (
      document.getElementById("auto_p") == null ||
      typeof document.getElementById("auto_p") == "undefined"
    ) {
      old_p = document.createElement("P");
      old_p.setAttribute("id", "auto_p");
      start_tag.after(old_p);
    } else {
      old_p = document.getElementById("auto_p");
    }
    for (let i = was_count_nodes; i < need_count_nodes; i++) {
      new_div = document.createElement("DIV");
      new_div.setAttribute("class", "node");
      if (i != 0 && i % count_node == 0) {
        new_br = document.createElement("BR");
        old_p.after(new_br);
        new_p = document.createElement("P");
        new_p.setAttribute("id", "auto_p");
        new_br.after(new_p);
        new_p.after(new_div);
      }
      new_div = this.create_min_menu(new_div);
      old_p.appendChild(new_div);
    }
  }
}


new BottomPanelTools().create_set_nodes(1);

class SetNodes {
  constructor() {
    this.itemMove = false;
    this.itemElement = null;
    this.offsetX;
    this.offsetY;
  }

  select_nodes_field() {
    return document.getElementsByClassName("node draggable field");
  }

  select_nodes_mark() {
    return document.getElementsByClassName("node draggable field mark");
  }

  select_nodes_save() {
    return document.getElementsByClassName("node draggable field mark save");
  }

  remove_set_nodes() {
    for (let i = this.select_nodes_save().length - 1; i >= 0; i--) {
      this.select_nodes_save()[i].remove();
    }
    for (let i = this.select_nodes_mark().length - 1; i >= 0; i--) {
      this.select_nodes_mark()[i].remove();
    }
    for (let i = this.select_nodes_field().length - 1; i >= 0; i--) {
      this.select_nodes_field()[i].remove();
    }
    localStorage.clear();
  }

  event_listens() {
    document.body.addEventListener("click", function (e) {
      if (e.target.id == "deleted_set_nodes") {
        SN.remove_set_nodes();
      }
    });

    document.body.addEventListener("mousedown", function (e) {
      if (e.target.classList.contains("node")) {
        e.preventDefault();
        e.target.setAttribute("class", "node draggable");
        this.itemMove = true;
        this.itemElement = e.target;
        const itemRect = this.itemElement.getBoundingClientRect();
        this.itemElement.style.position = "absolute";
        this.offsetX = e.clientX - itemRect.x;
        this.offsetY = e.clientY - itemRect.y;
        new SetNodes().moveItemToXY(
          this.itemElement,
          e.x,
          e.y,
          this.offsetX,
          this.offsetY
        );
        this.itemElement.ondragstart = function (e) {
          return false;
        };
      }
    });

    document.body.addEventListener("mousemove", function (e) {
      if (!this.itemMove) return false;
      if (e.buttons != 1 || this.itemElement.hasAttribute("data-id")) {
        this.itemMove = false;
        return;
      }
      new SetNodes().moveItemToXY(
        this.itemElement,
        e.x,
        e.y,
        this.offsetX,
        this.offsetY
      );
      return false;
    });

    document.body.addEventListener("mouseup", function (e) {
      if (this.itemMove) this.itemMove = false;
      if (
        F.rect_border_field.left < e.x &&
        F.rect_border_field.right > e.x &&
        F.rect_border_field.top < e.y &&
        F.rect_border_field.bottom > e.y
      ) {
        F.change_state_field();
      }
    });
  }

  moveItemToXY(item, x, y, offX, offY) {
    let itemRect = item.getBoundingClientRect();
    let minX = 0,
      minY = 0,
      maxY = document.documentElement.clientHeight - item.offsetHeight,
      maxX = document.documentElement.clientWidth - item.offsetWidth;
    let itemX = x - offX,
      itemY = y - offY;
    if (itemX < minX) itemX = minX;
    if (itemY < minY) {
      window.scrollBy(0, itemY - minY);
      itemY = minY;
    }
    if (itemX > maxX) itemX = maxX;
    if (itemY > maxY) {
      window.scrollBy(0, itemY - maxY);
      itemY = maxY;
    }
    item.style.left = itemX + pageXOffset + "px";
    item.style.top = itemY + pageYOffset + "px";
  }
}

SN = new SetNodes();
SN.event_listens();

class Data {
  constructor() { }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  delete_data(node) {
    node.textContent = "";
    localStorage.removeItem(node.getAttribute("data-id"));
    node.removeAttribute("data-id");
    node.removeAttribute("data-weight");
  }

  save_data(node, value) {
    this.random_num = [];
    var random_value = this.getRandomInt(0, 100);
    while (this.random_num.includes(random_value)) {
      random_value = this.getRandomInt(0, 100);
    }
    this.random_num[this.random_num.length] = random_value;
    node.setAttribute(
      "data-id",
      this.random_num[this.random_num.length - 1].toString()
    );
    node.setAttribute(
      "data-weight",
      value.toString()
    );
    let canvas_elem = document.getElementById("field");
    let x_node =
      parseFloat(node.offsetLeft) +
      parseFloat(node.offsetWidth) / 2 -
      parseFloat(canvas_elem.offsetLeft);
    let y_node =
      parseFloat(node.offsetTop) +
      parseFloat(node.offsetHeight) / 2 -
      parseFloat(canvas_elem.offsetTop);
    localStorage.setItem(
      this.random_num[this.random_num.length - 1].toString(),
      [value.toString(), x_node.toString(), y_node.toString()]
    );
  }
}

var D = new Data();

class PopUp extends Data {
  constructor() {
    super();
    this.step_size_new_field_popup = 100;
  }

  select_display_body() {
    return document.getElementsByClassName("display_popup");
  }

  select_display_exit() {
    return document.getElementsByClassName("exit_popup");
  }

  select_popup_body() {
    return document.getElementsByClassName("popup_body");
  }

  select_popup_input() {
    return document.getElementsByClassName("popup_input");
  }

  select_popup_button() {
    return document.getElementsByClassName("popup_button");
  }

  // TODO: do view all display popup for tap special button - not static method - will call other class MainPage <- Top Setting class
  create_display_popup(node, value) {
    let display_popup = document.createElement("DIV");

    if (value != null) {
      display_popup.textContent = value.toString();
    }
    for (let key of Object.keys(localStorage)) {
      if (key.toString() == node.dataset.id.toString()) {
        node.textContent = key;
        break;
      }
    }

    display_popup.setAttribute("class", "display_popup");
    node.appendChild(display_popup);
    display_popup.style.top = "20px";
    display_popup.style.left = "10px";

    let popup_exit = document.createElement("DIV");
    popup_exit.setAttribute("class", "exit_popup");
    node.appendChild(popup_exit);
    popup_exit.style.top = "20px";
    popup_exit.style.left = "10px";

    for (let i = 0; i < this.select_display_body().length; i++) {
      this.select_display_body()[i].parentElement.setAttribute(
        "class",
        "node draggable field mark save"
      );
    }
  }

  // TODO: do hidden all display popup for tap special button - not static method - will call other class MainPage <- Top Setting class
  remove_popup(display, elem) {
    if (elem.className == "display_popup" || elem.className == "exit_popup") {
      elem = elem.parentElement;
    }
    if (display) {
      for (let i = this.select_display_body().length - 1; i >= 0; i--) {
        if (this.select_display_body()[i]) {
          if (
            this.select_display_body()[i].parentElement.getAttribute(
              "data-id"
            ) == null ||
            this.select_display_body()
            [i].parentElement.getAttribute("data-id")
              .toString() == elem.getAttribute("data-id").toString()
          ) {
            this.select_display_body()[i].parentElement.setAttribute(
              "class",
              "node draggable field mark save"
            );
            this.select_display_body()[i].remove();
            this.select_display_exit()[i].remove();
            break;
          }
        }
      }
    } else {
      for (let i = this.select_popup_body().length - 1; i >= 0; i--) {
        if (this.select_popup_body()[i]) {
          if (
            this.select_popup_body()[i].parentElement.getAttribute("data-id") ==
            null ||
            this.select_popup_body()
            [i].parentElement.getAttribute("data-id")
              .toString() == elem.getAttribute("data-id").toString()
          ) {
            this.select_popup_body()[i].parentElement.setAttribute(
              "class",
              "node draggable field"
            );
            this.select_popup_body()[i].remove();
            break;
          }
        }
      }
    }
  }

  create_popup(build_start, offset) {
    let popup_body = document.createElement("DIV");
    popup_body.setAttribute("class", "popup_body");
    build_start.appendChild(popup_body);
    popup_body.style.top =
      (-parseFloat(popup_body.offsetHeight) + offset).toString() + "px";
    popup_body.style.left =
      (
        parseFloat(build_start.offsetWidth) / 2 -
        parseFloat(popup_body.offsetWidth) / 2 -
        5
      ).toString() + "px";

    let popup_input = document.createElement("INPUT");
    popup_input.setAttribute("class", "popup_input");
    popup_body.appendChild(popup_input);
    popup_input.focus();

    for (let i = 0; i < this.select_popup_body().length; i++) {
      this.select_popup_body()[i].parentElement.setAttribute(
        "class",
        "node draggable field mark"
      );
    }
  }

  double_click_proc(e) {
    e.preventDefault();
    let loop_popup = this.select_popup_body().length;
    if (loop_popup == 0) {
      loop_popup = 1;
    }
    for (let i = 0; i < loop_popup; i++) {
      if (this.select_popup_body()[i] || !e.target.classList.contains("save")) {
        if (
          (e.target.id == "field" ||
            e.target.classList.contains("field") ||
            e.target.className == "popup_body") &&
          this.select_popup_body()[i]
        ) {
          this.remove_popup(false, e.target);
        }
      }
    }
  }

  one_click_proc(e) {
    e.preventDefault();
    let loop_popup = this.select_popup_body().length;
    if (loop_popup == 0) {
      loop_popup = 1;
    }
    let loop_display = this.select_display_body().length;
    if (loop_display == 0) {
      loop_display = 1;
    }
    for (let i = 0; i < loop_popup; i++) {
      for (let j = 0; j < loop_display; j++) {
        if (
          e.target.className == "popup_button" &&
          this.select_popup_input()[i].value
        ) {
          let value = this.select_popup_input()[i].value;
          let node = this.select_popup_body()[i].parentElement;
          this.save_data(node, value);
          this.create_display_popup(node, value);
          break;
        } else if (
          (e.target.className == "popup_body" ||
            e.target.className == "popup_button") &&
          !this.select_popup_input()[i].value
        ) {
          this.select_popup_body()[i].style.backgroundColor =
            "rgba(255, 150, 150, 0.5)";
          break;
        } else if (e.target.className == "popup_input") {
          this.select_popup_body()[i].style.backgroundColor =
            "rgba(150, 150, 255, 0.5)";
          break;
        } else if (
          e.target.className == "display_popup" ||
          (this.select_display_body()[j] != null &&
            e.target == this.select_display_body()[j].parentElement)
        ) {
          let node = this.select_display_body()[j].parentElement;
          this.remove_popup(true, e.target);
          node.setAttribute("class", "node draggable field mark save");
          break;
        } else if (
          e.target.textContent != "" &&
          e.target.classList.contains("save") &&
          this.select_popup_body()[i] == null &&
          e.target.children.length == 0
        ) {
          this.create_display_popup(e.target, e.target.dataset.weight);
          break;
        } else if (
          e.target.className == "exit_popup" &&
          e.target.parentElement.classList.contains("save")
        ) {
          let node = e.target.parentElement;
          this.remove_popup(true, e.target);
          this.delete_data(node);
          node.setAttribute("class", "node draggable field");
          let node_bases = document.getElementsByClassName("node draggable");
          for (let i = 0; i < node_bases.length; i++){
            new BottomPanelTools().create_min_menu(node_bases[i]);
          }
          break;
        } else if (
          e.target.className == "create_field_popup" &&
          e.target.parentElement.classList.contains("field")
        ) {
          this.create_popup(e.target.parentElement, this.step_size_new_field_popup);
          this.step_size_new_field_popup += 50;
        }
        break;
      }
    }
  }

  processing_popup() {
    document.body.addEventListener("dblclick", function (e) {
      PU.double_click_proc(e);
    });
    document.body.addEventListener("click", function (e) {
      PU.one_click_proc(e);
    });
  }
}

var PU = new PopUp();
PU.processing_popup();

class DrawLine {
  constructor(canvas_elem, context) {
    this.canvas_elem = canvas_elem;
    this.context = context;
    this.start_position = { x: 0, y: 0 };
    this.line_coordinate = { x: 0, y: 0 };
    this.isDrawStart = false;
  }

  get_client_offset(e) {
    let { pageX, pageY } = e.touches ? e.touches[0] : e;
    let x = pageX - this.canvas_elem.offsetLeft;
    let y = pageY - this.canvas_elem.offsetTop;
    return { x, y };
  }

  draw_line(
    start_pos = this.start_position,
    line_coord = this.line_coordinate
  ) {
    this.context.beginPath();
    this.context.moveTo(start_pos.x, start_pos.y);
    this.context.lineTo(line_coord.x, line_coord.y);
    this.context.stroke();
  }

  mouse_down_listener(e) {
    this.start_position = this.get_client_offset(e);
    this.isDrawStart = true;
    return this.start_position;
  }

  mouse_move_listener(e) {
    if (!this.isDrawStart) return;
    this.line_coordinate = this.get_client_offset(e);
    this.clear_canvas();
    this.draw_line();
    return this.start_position;
  }

  mouse_up_listener(e) {
    this.line_coordinate = this.get_client_offset(e);
    this.isDrawStart = false;
    this.clear_canvas();
  }

  clear_canvas() {
    this.context.clearRect(
      0,
      0,
      this.canvas_elem.width,
      this.canvas_elem.height
    );
  }

  start_draw() {
    this.canvas_elem.addEventListener("mousedown", function (e) {
      DL.mouse_down_listener(e);
      CLN.get_coord_line(e);
    });
    this.canvas_elem.addEventListener("mousemove", function (e) {
      DL.mouse_move_listener(e);
    });
    this.canvas_elem.addEventListener("mouseup", function (e) {
      DL.mouse_up_listener(e);
      CLN.get_coord_line(e);
    });
    this.canvas_elem.addEventListener("touchstart", function (e) {
      DL.mouse_down_listener(e);
    });
    this.canvas_elem.addEventListener("touchmove", function (e) {
      DL.mouse_move_listener(e);
    });
    this.canvas_elem.addEventListener("touchend", function (e) {
      DL.mouse_up_listener(e);
    });
  }
}

var DL = new DrawLine(
  document.getElementById("field"),
  document.getElementById("field").getContext("2d")
);
DL.start_draw();

class ConcatLineNodes extends DrawLine {
  constructor(pair_nodes) {
    super(
      document.getElementById("field_line"),
      document.getElementById("field_line").getContext("2d")
    );
    this.pair_nodes = pair_nodes;
    this.nodes = Object.values(localStorage);
  }

  get_existing_localStorage(node) {
    return localStorage.getItem(node)
      ? localStorage.getItem(node).split(",")
      : [];
  }

  get_pos_node(existing) {
    return { x: parseInt(existing[1]), y: parseInt(existing[2]) };
  }

  Add_binding_localstorage_Draw_line(pair_nodes_0, pair_nodes_1) {
    let existing = this.get_existing_localStorage(pair_nodes_0);
    let start_pos = this.get_pos_node(existing);
    existing.push(pair_nodes_1);
    localStorage.setItem(pair_nodes_0, existing.toString());

    existing = this.get_existing_localStorage(pair_nodes_1);
    let line_coord = this.get_pos_node(existing);
    existing.push(pair_nodes_0);
    localStorage.setItem(pair_nodes_1, existing.toString());

    this.draw_line(start_pos, line_coord);
  }

  binding(nearest_node) {
    this.pair_nodes.push(nearest_node);
    if (
      this.pair_nodes.length % 2 == 0 &&
      this.pair_nodes[this.pair_nodes.length - 2] ==
      this.pair_nodes[this.pair_nodes.length - 1]
    ) {
      this.pair_nodes.pop();
      this.pair_nodes.pop();
    } else if (
      this.pair_nodes.length % 2 == 0 &&
      this.pair_nodes[this.pair_nodes.length - 2] !=
      this.pair_nodes[this.pair_nodes.length - 1] &&
      document.querySelectorAll(
        "div[data-id='" + this.pair_nodes[this.pair_nodes.length - 1] + "']"
      ).length == 1 &&
      document.querySelectorAll(
        "div[data-id='" + this.pair_nodes[this.pair_nodes.length - 2] + "']"
      ).length == 1
    ) {
      for (let i = 0; i < this.pair_nodes.length - 2; i = i + 2) {
        if (
          (this.pair_nodes[i] == this.pair_nodes[this.pair_nodes.length - 2] &&
            this.pair_nodes[i + 1] ==
            this.pair_nodes[this.pair_nodes.length - 1]) ||
          (this.pair_nodes[i] == this.pair_nodes[this.pair_nodes.length - 1] &&
            this.pair_nodes[i + 1] ==
            this.pair_nodes[this.pair_nodes.length - 2])
        ) {
          return;
        }
      }

      this.Add_binding_localstorage_Draw_line(
        this.pair_nodes[this.pair_nodes.length - 2],
        this.pair_nodes[this.pair_nodes.length - 1]
      );

      SW = new SetWeight(
        this.pair_nodes[this.pair_nodes.length - 2],
        this.pair_nodes[this.pair_nodes.length - 1]
      );
      SW.create_weight();

      CLN = new ConcatLineNodes(this.pair_nodes);
    }
  }

  affiliation(point_line) {
    let x_node = 0,
      y_node = 0;
    let min_dist = Number.MAX_VALUE;
    let x_line = parseFloat(point_line.x),
      y_line = parseFloat(point_line.y);
    let index_min_dist = 0;
    for (let i = 0; i < this.nodes.length; i++) {
      x_node = parseInt(this.nodes[i].split(",")[1]);
      y_node = parseInt(this.nodes[i].split(",")[2]);
      if (
        Math.sqrt(Math.pow(x_line - x_node, 2) + Math.pow(y_line - y_node, 2)) <
        min_dist
      ) {
        min_dist = Math.sqrt(
          Math.pow(x_line - x_node, 2) + Math.pow(y_line - y_node, 2)
        );
        index_min_dist = i;
      }
    }
    return localStorage.key(index_min_dist);
  }

  check_view_nodes() {
    this.nodes = Object.values(localStorage);
    for (let i = this.nodes.length; i >= 0; i--) {
      if (localStorage.key(i) != null) {
        if (
          document.querySelectorAll(
            "div[data-id='" + localStorage.key(i).toString() + "']"
          ).length != 1
        ) {
          localStorage.removeItem(localStorage.key(i).toString());
        }
      }
    }
    this.nodes = Object.values(localStorage);
  }

  get_coord_line(e) {
    this.check_view_nodes();
    if (this.nodes.length != 0) {
      let point_line = this.get_client_offset(e);
      let nearest_node = this.affiliation(point_line);
      this.binding(nearest_node);
    } else {
      this.isDrawStart = true;
    }
  }
}

var CLN = new ConcatLineNodes([]);


class Storages {
  constructor() {}

  get get_keys_id_localStorage() {
    return Object.keys(localStorage);
  }

  get get_values_localStorage() {
    return Object.values(localStorage);
  }

  get get_keys_id_sessionStorage() {
    return Object.keys(sessionStorage);
  }

  get get_values_sessionStorage() {
    return Object.values(sessionStorage);
  }

  pumping_sessionStorage(choice_columns, follow){
    sessionStorage.clear();
    if (!Array.isArray(choice_columns)) {
      choice_columns = [choice_columns]
    }
    let formed_row;
    for (let i = 0; i < this.get_keys_id_localStorage.length; i++) {
      if (follow == false){
        formed_row = []
        for (let j = 0; j < choice_columns.length; j++){
          formed_row.push(this.get_values_localStorage[i].split(",")[choice_columns[j]])
        }
        sessionStorage.setItem(this.get_keys_id_localStorage[i], formed_row);
      } else {
        formed_row = []
        for (let j = 0; j < choice_columns.length; j++){
          formed_row.push(this.get_values_localStorage[i].split(",")[choice_columns[j]])
        }
        for (let j = choice_columns[choice_columns.length - 1] + 1; j < this.get_values_localStorage[i].split(",").length; j++){
          formed_row.push(this.get_values_localStorage[i].split(",")[j])
        }
        sessionStorage.setItem(this.get_keys_id_localStorage[i], formed_row);
      }
    }
  }
}
