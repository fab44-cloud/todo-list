/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n// Data model\n\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.id = crypto.randomUUID();\n        this.todos = [];\n    }\n\n    addTodo(todo) {\n        if (todo instanceof _Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n            this.todos.push(todo);\n        } else {\n            console.error('Invalid item. Must be an instance of Todo.')\n        }\n    }\n\n    // Remove a todo item by its ID\n    removeTodo(todoId) {\n        this.todos = this.todos.filter(todo => todo.id !== todoId)   \n    }\n\n    // Get all todo items in this project\n    getTodos() {\n        return [...this.todos];\n    }\n\n    // Find a specific todo item by its ID\n    findTodos(todoId) {\n        return this.todos.find(todo => todo.id === todoId);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUHJvamVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQzBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsNkNBQUk7QUFDaEM7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzPzE0MDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGF0YSBtb2RlbFxuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmlkID0gY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICBpZiAodG9kbyBpbnN0YW5jZW9mIFRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgaXRlbS4gTXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBUb2RvLicpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYSB0b2RvIGl0ZW0gYnkgaXRzIElEXG4gICAgcmVtb3ZlVG9kbyh0b2RvSWQpIHtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5pZCAhPT0gdG9kb0lkKSAgIFxuICAgIH1cblxuICAgIC8vIEdldCBhbGwgdG9kbyBpdGVtcyBpbiB0aGlzIHByb2plY3RcbiAgICBnZXRUb2RvcygpIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnRvZG9zXTtcbiAgICB9XG5cbiAgICAvLyBGaW5kIGEgc3BlY2lmaWMgdG9kbyBpdGVtIGJ5IGl0cyBJRFxuICAgIGZpbmRUb2Rvcyh0b2RvSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Project.js\n\n}");

/***/ }),

/***/ "./src/ProjectManager.js":
/*!*******************************!*\
  !*** ./src/ProjectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTodoToProject: () => (/* binding */ addTodoToProject),\n/* harmony export */   getProjectById: () => (/* binding */ getProjectById),\n/* harmony export */   getProjects: () => (/* binding */ getProjects),\n/* harmony export */   moveTodo: () => (/* binding */ moveTodo),\n/* harmony export */   removeProject: () => (/* binding */ removeProject)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n// Application logic\n\n\nlet projects = [];\n\nconst createDefaultProject = () => {\n    // Check if projects array is empty, and if so, add a default project\n    if (projects.length === 0) {\n        const defaultProject = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Default Project');\n        projects.push(defaultProject);\n    }\n};\n\n// Function to get all projects\nconst getProjects = () => {\n    return [...projects];\n};\n\n// Function to find a project by its unique ID\nconst getProjectById = (projectId) => {\n    return projects.find(project => project.id === projectId)\n};\n\n// Function to add a new project\nconst addProject = (name) => {\n    if (!name) return;\n    const newProject = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name);\n    projects.push(newProject);\n};\n\n// Function to remove a project (preventing removal of the default project)\nconst removeProject = (projectId) => {\n    const projectToRemove = projects.find(project => project.id === projectId);\n    if (projectToRemove && projectToRemove.name !== 'Default Project') {\n        projects = projects.filter(project => projectId !== project.id);\n    } else {\n        console.error('Cannot remove the default project.');\n    }\n};\n\n// Function to add a todo to a specific project\nconst addTodoToProject = (projectId, todo) => {\n    const project = getProjectById(projectId);\n    if (project) {\n        project.addTodo(todo)\n    } else {\n        console.error('Project not found');\n    }\n};\n\n// Function to move a todo from one project to another\nconst moveTodo = (todoId, fromProjectId, toProjectId) => {\n    const fromProject = getProjectById(fromProjectId);\n    const toProject = getProjectById(toProjectId);\n    if (fromProject && toProject) {\n        const todoToMove = fromProject.getTodos().find(todo => todo.id === todoId);\n        if (todoToMove) {\n            fromProject.removeTodo(todoId);\n            toProject.addTodo(todoToMove);\n            return true;\n        }\n    }\n    return false;\n};\n\ncreateDefaultProject();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUHJvamVjdE1hbmFnZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ2dDOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0RBQU87QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBTztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdE1hbmFnZXIuanM/NjAzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcHBsaWNhdGlvbiBsb2dpY1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcblxubGV0IHByb2plY3RzID0gW107XG5cbmNvbnN0IGNyZWF0ZURlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIHByb2plY3RzIGFycmF5IGlzIGVtcHR5LCBhbmQgaWYgc28sIGFkZCBhIGRlZmF1bHQgcHJvamVjdFxuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCBQcm9qZWN0Jyk7XG4gICAgICAgIHByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xuICAgIH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGdldCBhbGwgcHJvamVjdHNcbmNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgIHJldHVybiBbLi4ucHJvamVjdHNdO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gZmluZCBhIHByb2plY3QgYnkgaXRzIHVuaXF1ZSBJRFxuY29uc3QgZ2V0UHJvamVjdEJ5SWQgPSAocHJvamVjdElkKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpXG59O1xuXG4vLyBGdW5jdGlvbiB0byBhZGQgYSBuZXcgcHJvamVjdFxuY29uc3QgYWRkUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm47XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG59O1xuXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgYSBwcm9qZWN0IChwcmV2ZW50aW5nIHJlbW92YWwgb2YgdGhlIGRlZmF1bHQgcHJvamVjdClcbmNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdElkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFRvUmVtb3ZlID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG4gICAgaWYgKHByb2plY3RUb1JlbW92ZSAmJiBwcm9qZWN0VG9SZW1vdmUubmFtZSAhPT0gJ0RlZmF1bHQgUHJvamVjdCcpIHtcbiAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0SWQgIT09IHByb2plY3QuaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCByZW1vdmUgdGhlIGRlZmF1bHQgcHJvamVjdC4nKTtcbiAgICB9XG59O1xuXG4vLyBGdW5jdGlvbiB0byBhZGQgYSB0b2RvIHRvIGEgc3BlY2lmaWMgcHJvamVjdFxuY29uc3QgYWRkVG9kb1RvUHJvamVjdCA9IChwcm9qZWN0SWQsIHRvZG8pID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQocHJvamVjdElkKTtcbiAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0LmFkZFRvZG8odG9kbylcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdQcm9qZWN0IG5vdCBmb3VuZCcpO1xuICAgIH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIG1vdmUgYSB0b2RvIGZyb20gb25lIHByb2plY3QgdG8gYW5vdGhlclxuY29uc3QgbW92ZVRvZG8gPSAodG9kb0lkLCBmcm9tUHJvamVjdElkLCB0b1Byb2plY3RJZCkgPT4ge1xuICAgIGNvbnN0IGZyb21Qcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQoZnJvbVByb2plY3RJZCk7XG4gICAgY29uc3QgdG9Qcm9qZWN0ID0gZ2V0UHJvamVjdEJ5SWQodG9Qcm9qZWN0SWQpO1xuICAgIGlmIChmcm9tUHJvamVjdCAmJiB0b1Byb2plY3QpIHtcbiAgICAgICAgY29uc3QgdG9kb1RvTW92ZSA9IGZyb21Qcm9qZWN0LmdldFRvZG9zKCkuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XG4gICAgICAgIGlmICh0b2RvVG9Nb3ZlKSB7XG4gICAgICAgICAgICBmcm9tUHJvamVjdC5yZW1vdmVUb2RvKHRvZG9JZCk7XG4gICAgICAgICAgICB0b1Byb2plY3QuYWRkVG9kbyh0b2RvVG9Nb3ZlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmNyZWF0ZURlZmF1bHRQcm9qZWN0KCk7XG5cbmV4cG9ydCB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgZ2V0UHJvamVjdEJ5SWQsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGFkZFRvZG9Ub1Byb2plY3QsXG4gICAgbW92ZVRvZG9cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ProjectManager.js\n\n}");

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Data model\n\nclass Todo {\n    constructor(\n        title,\n        description = '',\n        dueDate = null,\n        priority = 'medium',\n        notes = '',\n        checklist = []\n    ) {\n        this.id = crypto.randomUUID() // Unique ID for each todo\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.notes = notes;\n        this.checklist = checklist;\n        this.completed = false; // Default status is not completed\n    }\n\n    // Method to toggle completion status\n    toggleCompleted() {\n        this.completed = !this.completed;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVG9kby5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1RvZG8uanM/M2EwNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEYXRhIG1vZGVsXG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSAnJyxcbiAgICAgICAgZHVlRGF0ZSA9IG51bGwsXG4gICAgICAgIHByaW9yaXR5ID0gJ21lZGl1bScsXG4gICAgICAgIG5vdGVzID0gJycsXG4gICAgICAgIGNoZWNrbGlzdCA9IFtdXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpIC8vIFVuaXF1ZSBJRCBmb3IgZWFjaCB0b2RvXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7IC8vIERlZmF1bHQgc3RhdHVzIGlzIG5vdCBjb21wbGV0ZWRcbiAgICB9XG5cbiAgICAvLyBNZXRob2QgdG8gdG9nZ2xlIGNvbXBsZXRpb24gc3RhdHVzXG4gICAgdG9nZ2xlQ29tcGxldGVkKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Todo.js\n\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectManager */ \"./src/ProjectManager.js\");\n// Controller (application entry point)\n\n\n\n\nlet activeProjectId = null;\n\nfunction renderAll() {\n    const projects = _ProjectManager__WEBPACK_IMPORTED_MODULE_1__.getProjects();\n    const activeProject = projects.find(project => project.id === activeProjectId);\n    _ui__WEBPACK_IMPORTED_MODULE_0__.renderProjects(projects, activeProjectId);\n    \n    // If an active project exists, render its todos. Otherwise, display an empty state.\n    if (activeProject) {\n        _ui__WEBPACK_IMPORTED_MODULE_0__.renderTodos(activeProject.todos, activeProject.name);\n    } else {\n        _ui__WEBPACK_IMPORTED_MODULE_0__.renderTodos([], \"No Project Selected\");\n    }\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    // On page load, set the first project as active and render everything\n    const initialProjects = _ProjectManager__WEBPACK_IMPORTED_MODULE_1__.getProjects();\n    if (initialProjects.length > 0) {\n        activeProjectId = initialProjects[0].id\n    }\n    renderAll();\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRTJCO0FBQ3dCOztBQUVuRDs7QUFFQTtBQUNBLHFCQUFxQix3REFBMEI7QUFDL0M7QUFDQSxJQUFJLCtDQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDRDQUFjO0FBQ3RCLE1BQU07QUFDTixRQUFRLDRDQUFjO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qix3REFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29udHJvbGxlciAoYXBwbGljYXRpb24gZW50cnkgcG9pbnQpXG5cbmltcG9ydCAqIGFzIFVJIGZyb20gJy4vdWknO1xuaW1wb3J0ICogYXMgUHJvamVjdE1hbmFnZXIgZnJvbSAnLi9Qcm9qZWN0TWFuYWdlcic7XG5cbmxldCBhY3RpdmVQcm9qZWN0SWQgPSBudWxsO1xuXG5mdW5jdGlvbiByZW5kZXJBbGwoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBQcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpO1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gYWN0aXZlUHJvamVjdElkKTtcbiAgICBVSS5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0cywgYWN0aXZlUHJvamVjdElkKTtcbiAgICBcbiAgICAvLyBJZiBhbiBhY3RpdmUgcHJvamVjdCBleGlzdHMsIHJlbmRlciBpdHMgdG9kb3MuIE90aGVyd2lzZSwgZGlzcGxheSBhbiBlbXB0eSBzdGF0ZS5cbiAgICBpZiAoYWN0aXZlUHJvamVjdCkge1xuICAgICAgICBVSS5yZW5kZXJUb2RvcyhhY3RpdmVQcm9qZWN0LnRvZG9zLCBhY3RpdmVQcm9qZWN0Lm5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFVJLnJlbmRlclRvZG9zKFtdLCBcIk5vIFByb2plY3QgU2VsZWN0ZWRcIik7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIE9uIHBhZ2UgbG9hZCwgc2V0IHRoZSBmaXJzdCBwcm9qZWN0IGFzIGFjdGl2ZSBhbmQgcmVuZGVyIGV2ZXJ5dGhpbmdcbiAgICBjb25zdCBpbml0aWFsUHJvamVjdHMgPSBQcm9qZWN0TWFuYWdlci5nZXRQcm9qZWN0cygpO1xuICAgIGlmIChpbml0aWFsUHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBhY3RpdmVQcm9qZWN0SWQgPSBpbml0aWFsUHJvamVjdHNbMF0uaWRcbiAgICB9XG4gICAgcmVuZGVyQWxsKCk7XG59KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos)\n/* harmony export */ });\n/* harmony import */ var _ProjectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectManager */ \"./src/ProjectManager.js\");\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ \"./src/Todo.js\");\n// Presentation layer (DOM manipulation)\n\n\n\nconst projectListElement = document.getElementById('project-list');\nconst todoListElement = document.getElementById('todo-list');\n\n// View all projects\nfunction renderProjects(projects, activeProjectId){\n    projectListElement.innerHTML = \"\";\n    \n    projects.forEach(project => {\n        const listItem = document.createElement('li');\n        listItem.textContent = project.name;\n        listItem.dataset.projectId = project.id;\n\n        if (project.id === activeProjectId){\n            listItem.classList.add('active');\n        }\n        \n        projectListElement.appendChild(listItem);\n    });\n}\n\nfunction renderTodos(todos, projectName) {\n    todoListElement.innerHTML = \"\";\n    const currentHeading = document.getElementById('current-project-title');\n    currentHeading.textContent = projectName;\n    if (todos.length === 0) {\n        console.log(\"No todos yet.\");\n    }\n    todos.forEach(todo => {\n        const todoItem = document.createElement('div');\n        todoItem.dataset.todoId = todo.id;\n        todoItem.classList.add('todo-item', `priority-${todo.prority}`);\n        todoItem.innerHTML =\n        `<div class=\"todo-info\">\n            <h3>${todo.title}</h3>\n            <span class=\"due-date\">${todo.dueDate || 'No due date'}</span>\n        </div>\n        <div class=\"todo-actions\">\n            <button class=\"delete-btn\">&times;</button>\n        </div>`;\n        todoListElement.appendChild(todoItem);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ2dGO0FBQ3JEOztBQUUzQjtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxhQUFhO0FBQ3JFO0FBQ0E7QUFDQSxrQkFBa0IsV0FBVztBQUM3QixxQ0FBcUMsOEJBQThCO0FBQ25FO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcz83OThlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFByZXNlbnRhdGlvbiBsYXllciAoRE9NIG1hbmlwdWxhdGlvbilcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRQcm9qZWN0LCBnZXRQcm9qZWN0cywgYWRkUHJvamVjdH0gZnJvbSAnLi9Qcm9qZWN0TWFuYWdlcic7XG5pbXBvcnQgIFRvZG8gIGZyb20gJy4vVG9kbydcblxuY29uc3QgcHJvamVjdExpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdCcpO1xuY29uc3QgdG9kb0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdCcpO1xuXG4vLyBWaWV3IGFsbCBwcm9qZWN0c1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RzLCBhY3RpdmVQcm9qZWN0SWQpe1xuICAgIHByb2plY3RMaXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGxpc3RJdGVtLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcblxuICAgICAgICBpZiAocHJvamVjdC5pZCA9PT0gYWN0aXZlUHJvamVjdElkKXtcbiAgICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9kb3ModG9kb3MsIHByb2plY3ROYW1lKSB7XG4gICAgdG9kb0xpc3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgY3VycmVudEhlYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudC1wcm9qZWN0LXRpdGxlJyk7XG4gICAgY3VycmVudEhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBpZiAodG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm8gdG9kb3MgeWV0LlwiKTtcbiAgICB9XG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb0l0ZW0uZGF0YXNldC50b2RvSWQgPSB0b2RvLmlkO1xuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nLCBgcHJpb3JpdHktJHt0b2RvLnByb3JpdHl9YCk7XG4gICAgICAgIHRvZG9JdGVtLmlubmVySFRNTCA9XG4gICAgICAgIGA8ZGl2IGNsYXNzPVwidG9kby1pbmZvXCI+XG4gICAgICAgICAgICA8aDM+JHt0b2RvLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0b2RvLmR1ZURhdGUgfHwgJ05vIGR1ZSBkYXRlJ308L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ0blwiPiZ0aW1lczs8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgdG9kb0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;