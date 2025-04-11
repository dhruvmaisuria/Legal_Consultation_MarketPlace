import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import { AdminDashboardCharts } from "./AdminDashboardCharts"; // ✅ Import Charts

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("/adminDashBoard");
        setStats(res.data.data);
      } catch (err) {
        console.error("Failed to fetch admin stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (!stats) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">Failed to load dashboard data.</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <Row>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <h3>{stats.totalUsers}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Total Lawyers</Card.Title>
              <h3>{stats.totalLawyers}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Total Appointments</Card.Title>
              <h3>{stats.totalAppointments}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm">
            <Card.Body>
              <Card.Title>Total Payments</Card.Title>
              <h3>₹{Number(stats.totalEarnings).toFixed(2)}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* ✅ Insert charts below the stats */}
      <AdminDashboardCharts />
    </Container>
  );
};

export default AdminDashboard;
