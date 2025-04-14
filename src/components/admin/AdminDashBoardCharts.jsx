
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//   BarChart, Bar, PieChart, Pie, Cell, Legend
// } from "recharts";

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

// export const AdminDashboardCharts = () => {
//   const [chartData, setChartData] = useState([]);
//   const [lawyerStats, setLawyerStats] = useState([]);
//   const [signupStats, setSignupStats] = useState([]);
//   const [appointmentStatusStats, setAppointmentStatusStats] = useState([]);
//   const [chartType, setChartType] = useState("bar"); // toggle bar/line
//   const [range, setRange] = useState("6"); // placeholder range filter

//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         const [monthlyRes, lawyerRes, signupRes, statusRes] = await Promise.all([
//           axios.get("/chart-data"),
//           axios.get("/lawyerAppointments"),
//           axios.get("/userSignupStats"),
//           axios.get("/appointmentStatusStats"),
//         ]);

//         setChartData(monthlyRes.data.data || []);
//         setLawyerStats(lawyerRes.data.data || []);
//         setSignupStats(signupRes.data.data || []);
//         setAppointmentStatusStats(statusRes.data.data || []);
//       } catch (error) {
//         console.error("Failed to fetch chart data", error);
//       }
//     };

//     fetchChartData();
//   }, []);

//   const ChartSwitcher = ({ title, children }) => (
//     <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-6 w-full">
//       <div className="flex items-center justify-between mb-2">
//         <h5 className="text-lg font-semibold dark:text-white">{title}</h5>
//         {["Monthly Payments", "Monthly Appointments"].includes(title) && (
//           <select
//             value={chartType}
//             onChange={(e) => setChartType(e.target.value)}
//             className="border px-2 py-1 text-sm rounded dark:bg-gray-700 dark:text-white"
//           >
//             <option value="bar">Bar</option>
//             <option value="line">Line</option>
//           </select>
//         )}
//       </div>
//       {children}
//     </div>
//   );

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

//       <div className="md:col-span-2 mb-4 flex justify-between items-center">
//         <h4 className="text-2xl font-bold dark:text-white">Dashboard Charts</h4>
//         <select
//           value={range}
//           onChange={(e) => setRange(e.target.value)}
//           className="border px-2 py-1 rounded text-sm dark:bg-gray-800 dark:text-white"
//         >
//           <option value="3">Last 3 Months</option>
//           <option value="6">Last 6 Months</option>
//           <option value="12">Last 12 Months</option>
//         </select>
//       </div>

//       <ChartSwitcher title="Monthly Payments">
//         <ResponsiveContainer width="100%" height={300}>
//           {chartType === "bar" ? (
//             <BarChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="payments" fill="#8884d8" />
//             </BarChart>
//           ) : (
//             <LineChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="payments" stroke="#8884d8" />
//             </LineChart>
//           )}
//         </ResponsiveContainer>
//       </ChartSwitcher>

//       <ChartSwitcher title="Monthly Appointments">
//         <ResponsiveContainer width="100%" height={300}>
//           {chartType === "bar" ? (
//             <BarChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="appointments" fill="#82ca9d" />
//             </BarChart>
//           ) : (
//             <LineChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="appointments" stroke="#82ca9d" />
//             </LineChart>
//           )}
//         </ResponsiveContainer>
//       </ChartSwitcher>

//       <ChartSwitcher title="Appointments Distribution (Monthly)">
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={chartData}
//               dataKey="appointments"
//               nameKey="name"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               label
//             >
//               {chartData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </ChartSwitcher>

//       <ChartSwitcher title="Appointments by Lawyer">
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={lawyerStats}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="lawyerName" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="count" fill="#ff8042" />
//           </BarChart>
//         </ResponsiveContainer>
//       </ChartSwitcher>

//       <ChartSwitcher title="User Signups Per Month">
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={signupStats}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="count" stroke="#8dd1e1" />
//           </LineChart>
//         </ResponsiveContainer>
//       </ChartSwitcher>

//       <ChartSwitcher title="Appointment Status Distribution">
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={appointmentStatusStats}
//               dataKey="count"
//               nameKey="status"
//               cx="50%"
//               cy="50%"
//               outerRadius={100}
//               label
//             >
//               {appointmentStatusStats.map((entry, index) => (
//                 <Cell key={`cell-status-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </ChartSwitcher>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];

export const AdminDashboardCharts = ({ darkMode }) => {
  const [chartData, setChartData] = useState([]);
  const [lawyerStats, setLawyerStats] = useState([]);
  const [signupStats, setSignupStats] = useState([]);
  const [appointmentStatusStats, setAppointmentStatusStats] = useState([]);
  const [chartType, setChartType] = useState("bar");
  const [range, setRange] = useState("6");

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const [monthlyRes, lawyerRes, signupRes, statusRes] = await Promise.all([
          axios.get("/chart-data"),
          axios.get("/lawyerAppointments"),
          axios.get("/userSignupStats"),
          axios.get("/appointmentStatusStats"),
        ]);

        setChartData(monthlyRes.data.data || []);
        setLawyerStats(lawyerRes.data.data || []);
        setSignupStats(signupRes.data.data || []);
        setAppointmentStatusStats(statusRes.data.data || []);
      } catch (error) {
        console.error("Failed to fetch chart data", error);
      }
    };

    fetchChartData();
  }, []);

  const ChartSwitcher = ({ title, children }) => (
    <div className={`rounded-xl shadow p-4 mb-6 w-full ${darkMode ? "bg-dark text-light" : "bg-white"}`}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="fw-semibold">{title}</h5>
        {["Monthly Payments", "Monthly Appointments"].includes(title) && (
          <select
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
            className={`form-select form-select-sm w-auto ${darkMode ? "bg-dark text-light border-secondary" : ""}`}
          >
            <option value="bar">Bar</option>
            <option value="line">Line</option>
          </select>
        )}
      </div>
      {children}
    </div>
  );

  return (
    <div className="container-fluid mt-4">
      <div className="row mb-3">
        <div className="col-md-6">
          <h4 className={`fw-bold ${darkMode ? "text-light" : ""}`}>Dashboard Charts</h4>
        </div>
        <div className="col-md-6 text-end">
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className={`form-select form-select-sm w-auto d-inline-block ${darkMode ? "bg-dark text-light border-secondary" : ""}`}
          >
            <option value="3">Last 3 Months</option>
            <option value="6">Last 6 Months</option>
            <option value="12">Last 12 Months</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <ChartSwitcher title="Monthly Payments">
            <ResponsiveContainer width="100%" height={300}>
              {chartType === "bar" ? (
                <BarChart
                  data={chartData}
                  style={{ backgroundColor: darkMode ? "#2e2e3e" : "#fff", borderRadius: 8, padding: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#555" : "#ccc"} />
                  <XAxis dataKey="name" stroke={darkMode ? "#ccc" : "#000"} />
                  <YAxis stroke={darkMode ? "#ccc" : "#000"} />
                  <Tooltip />
                  <Bar dataKey="payments" fill="#8884d8" />
                </BarChart>
              ) : (
                <LineChart
                  data={chartData}
                  style={{ backgroundColor: darkMode ? "#2e2e3e" : "#fff", borderRadius: 8, padding: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#555" : "#ccc"} />
                  <XAxis dataKey="name" stroke={darkMode ? "#ccc" : "#000"} />
                  <YAxis stroke={darkMode ? "#ccc" : "#000"} />
                  <Tooltip />
                  <Line type="monotone" dataKey="payments" stroke="#8884d8" />
                </LineChart>
              )}
            </ResponsiveContainer>
          </ChartSwitcher>
        </div>

        <div className="col-md-6">
          <ChartSwitcher title="Monthly Appointments">
            <ResponsiveContainer width="100%" height={300}>
              {chartType === "bar" ? (
                <BarChart data={chartData}
                  style={{ backgroundColor: darkMode ? "#2e2e3e" : "#fff", borderRadius: 8, padding: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#555" : "#ccc"} />
                  <XAxis dataKey="name" stroke={darkMode ? "#ccc" : "#000"} />
                  <YAxis stroke={darkMode ? "#ccc" : "#000"} />
                  <Tooltip />
                  <Bar dataKey="appointments" fill="#82ca9d" />
                </BarChart>
              ) : (
                <LineChart data={chartData}
                  style={{ backgroundColor: darkMode ? "#2e2e3e" : "#fff", borderRadius: 8, padding: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#555" : "#ccc"} />
                  <XAxis dataKey="name" stroke={darkMode ? "#ccc" : "#000"} />
                  <YAxis stroke={darkMode ? "#ccc" : "#000"} />
                  <Tooltip />
                  <Line type="monotone" dataKey="appointments" stroke="#82ca9d" />
                </LineChart>
              )}
            </ResponsiveContainer>
          </ChartSwitcher>
        </div>

        <div className="col-md-6">
          <ChartSwitcher title="Appointments Distribution (Monthly)">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="appointments"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartSwitcher>
        </div>

        <div className="col-md-6">
          <ChartSwitcher title="Appointments by Lawyer">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={lawyerStats}
                style={{ backgroundColor: darkMode ? "#2e2e3e" : "#fff", borderRadius: 8, padding: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#555" : "#ccc"} />
                <XAxis dataKey="lawyerName" stroke={darkMode ? "#ccc" : "#000"} />
                <YAxis stroke={darkMode ? "#ccc" : "#000"} />
                <Tooltip />
                <Bar dataKey="count" fill="#ff8042" />
              </BarChart>
            </ResponsiveContainer>
          </ChartSwitcher>
        </div>

        <div className="col-md-6">
          <ChartSwitcher title="User Signups Per Month">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={signupStats}
                style={{ backgroundColor: darkMode ? "#2e2e3e" : "#fff", borderRadius: 8, padding: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#555" : "#ccc"} />
                <XAxis dataKey="month" stroke={darkMode ? "#ccc" : "#000"} />
                <YAxis stroke={darkMode ? "#ccc" : "#000"} />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8dd1e1" />
              </LineChart>
            </ResponsiveContainer>
          </ChartSwitcher>
        </div>

        <div className="col-md-6">
          <ChartSwitcher title="Appointment Status Distribution">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={appointmentStatusStats}
                  dataKey="count"
                  nameKey="status"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {appointmentStatusStats.map((entry, index) => (
                    <Cell key={`cell-status-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartSwitcher>
        </div>
      </div>
    </div>
  );
};
