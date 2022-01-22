const ProjectManager = require("../lib/Pm");

test("creates new Project Manager object", () => {
  const pm = new ProjectManager("Dave", "email");

  expect(pm.phone).toEqual(expect.any(Number));
});

test("returns Manager objects office number property", () => {
  const pm = new ProjectManager("Dave", "email");
//   expect(pm.getOfficeNumber()).toEqual(manager.officeNumber);
});