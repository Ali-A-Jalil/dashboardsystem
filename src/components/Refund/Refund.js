import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { FaFilter } from "react-icons/fa";
import { IoIosDownload } from "react-icons/io";
import { useLocation } from "react-router-dom";
import InfoBox from "../InfoBox/InfoBox";
import ActionMenu from "../ActionMenu/ActionMenu";
import FilterModal from "../FilterModal/FilterModal";

const Refund = () => {
  const location = useLocation();

  // General State
  const [refunds, setRefunds] = useState([]);
  const [selectedActionId, setSelectedActionId] = useState(null);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [filterValues, setFilterValues] = useState(initialFilterState);

  // Totals
  const [totalRefunds, setTotalRefunds] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Get Refunds
  useEffect(() => {
    if (location.state?.invoice) {
      const newRefund = createRefundEntry(location.state.invoice);

      setRefunds((prev) => {
        // Check if the new refund already exists
        const exists = prev.some((refund) => refund.id === newRefund.id);
        return exists ? prev : [...prev, newRefund]; // If not, add it
      });
    }
  }, [location.state]); // Only run this effect when the invoice prop changes

  // Calculate totals for refunds
  useEffect(() => {
    calculateTotals(refunds);
  }, [refunds]);

  // Create Refund
  const createRefundEntry = (invoice) => ({
    id: invoice.id,
    customer: invoice.customerName,
    amount: invoice.amountPaid || 0,
    status: "Pending",
    createdBy: "Ali Abdel galil",
    createdAt: new Date().toLocaleString(),
    refundReason: "N/A",
  });

  // totals functions
  const calculateTotals = (data) => {
    setTotalRefunds(data.length);
    setTotalAmount(data.reduce((sum, refund) => sum + refund.amount, 0));
  };

  // Delete Refund
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this refund?")) {
      setRefunds((prev) => prev.filter((refund) => refund.id !== id));
    }
  };

  return (
    <div className="refund-container">
      {/*  master actions */}
      <div className="actions mb-3 d-flex">
        <Button variant="contained" onClick={() => setFilterModalOpen(true)}>
          <FaFilter /> Filter
        </Button>
        <Button variant="contained" color="success" className="ml-2">
          <IoIosDownload /> Export XL Sheet
        </Button>
      </div>

      {/* totals */}
      <div className="summary d-flex justify-content-between mb-3">
        <InfoBox title="Refund" value={totalRefunds} />
        <InfoBox title="Amount" value={totalAmount.toLocaleString()} />
      </div>

      {/* table Refund */}
      <div className="table-wrapper">
        <h2>Refund List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Created By</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {refunds.map((refund) => (
              <tr key={refund.id}>
                <td>{refund.id}</td>
                <td>{refund.customer}</td>
                <td>{refund.amount}</td>
                <td>{refund.status}</td>
                <td>{refund.createdBy}</td>
                <td>{refund.createdAt}</td>
                <td>
                  <Button
                    size="small"
                    onClick={() => setSelectedActionId(refund.id)}
                  >
                    Action
                  </Button>
                  {selectedActionId === refund.id && (
                    <ActionMenu
                      onConfirm={() => alert(`Refund ${refund.id} confirmed!`)}
                      onDelete={() => handleDelete(refund.id)}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* filter modal */}
      <FilterModal
        open={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        filterValues={filterValues}
        onInputChange={(e) =>
          setFilterValues({ ...filterValues, [e.target.name]: e.target.value })
        }
      />
    </div>
  );
};

// initial filter state
const initialFilterState = {
  refundReason: "",
  amount: "",
  invoice: "",
  createdBy: "",
  dateFrom: "",
  dateTo: "",
};

export default Refund;
