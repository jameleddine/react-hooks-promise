table example

```jsx
 const headCells = [
	{ id: "email", numeric: false, disablePadding: true, label: "Email" },
	{ id: "actions", numeric: true, disablePadding: false, label: "Action" }
  ];
const data = [
    {"email":"user1@gmail.com"},
    {"email":"user2@gmail.com"}
];
<Table
                tableHeaderColor='darkslategrey'
                tableHead={headCells}
                tableData={data}
                order='desc'
                orderBy='calories'
                tableName='Table title'
              />;
```
