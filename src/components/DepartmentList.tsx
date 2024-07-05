import React, { useState } from "react";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import "./DepartmentList.css";

const departments = [
  {
    name: "Agriculture & Fishing",
    subDepartments: [
      "Agriculture",
      "Crops",
      "Farming Animals & Livestock",
      "Fishery & Aquaculture",
      "Ranching",
    ],
  },
  {
    name: "Business Services",
    subDepartments: [
      "Accounting & Accounting Services",
      "Auctions",
      "Business Services - General",
      "Call Centers & Business Centers",
      "Career Planning",
      "Career",
      "Commercial Printing",
    ],
  },
];

const DepartmentList: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const handleToggle = (department: string) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [department]: !prevOpen[department],
    }));
  };

  const handleSelect = (department: string) => {
    setSelected((prevSelected) => {
      const isSelected = !prevSelected[department];
      const newSelected = { ...prevSelected, [department]: isSelected };
      if (departments.find((dep) => dep.name === department)) {
        departments
          .find((dep) => dep.name === department)
          ?.subDepartments.forEach((sub) => {
            newSelected[sub] = isSelected;
          });
      }
      return newSelected;
    });
  };

  const handleSubSelect = (department: string, subDepartment: string) => {
    setSelected((prevSelected) => {
      const newSelected = {
        ...prevSelected,
        [subDepartment]: !prevSelected[subDepartment],
      };
      const allSelected =
        departments
          .find((dep) => dep.name === department)
          ?.subDepartments.every((sub) => newSelected[sub]) ?? false;
      newSelected[department] = allSelected;
      return newSelected;
    });
  };

  return (
    <List className="department-list">
      {departments.map((department) => (
        <div key={department.name}>
          <ListItem
            button
            onClick={() => handleToggle(department.name)}
            className="department-item"
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={!!selected[department.name]}
                tabIndex={-1}
                disableRipple
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(department.name);
                }}
              />
            </ListItemIcon>
            <ListItemText primary={department.name} />
            {open[department.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[department.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((sub) => (
                <ListItem key={sub} button className="sub-department-item">
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={!!selected[sub]}
                      tabIndex={-1}
                      disableRipple
                      onClick={() => handleSubSelect(department.name, sub)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;
