// 'use client'
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import { Table } from "@/components/ui/table";
// import { Card, CardContent } from "@/components/ui/card";
// import { Loader } from "@/components/ui/loader";
// import { toast } from "react-hot-toast";

// const AdminManageUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get("/api/admin/users");
//       setUsers(response.data);
//     } catch (error) {
//       toast.error("Failed to fetch users");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this user?")) return;
//     try {
//       await axios.delete(`/api/admin/users/${id}`);
//       toast.success("User deleted successfully");
//       setUsers(users.filter(user => user.id !== id));
//     } catch (error) {
//       toast.error("Failed to delete user");
//     }
//   };

//   return (
//     <Card>
//       <CardContent>
//         <h2 className="text-xl font-bold mb-4">Manage Users</h2>
//         {loading ? (
//           <Loader />
//         ) : (
//           <Table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                   <td>
//                     <Button 
//                       className="bg-red-500 text-white px-4 py-2 rounded" 
//                       onClick={() => handleDelete(user.id)}
//                     >
//                       Delete
//                     </Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default AdminManageUsers;
