import React from "react";
import { motion } from "framer-motion";

const SchoolResults = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <motion.div
        // Animation Added
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-6 md:p-10 border"
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6"
        >
          Bangladesh Technical Education Board, Dhaka
        </motion.h1>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700 mb-8">
          <div>
            <p><span className="font-semibold">Name:</span> MD. OMOR ALI</p>
            <p><span className="font-semibold">Father's Name:</span> MD. RAFIQUL SARDAR</p>
            <p><span className="font-semibold">Mother's Name:</span> MST. RUNA BEGUM</p>
            <p><span className="font-semibold">Roll No:</span> 191339</p>
          </div>
          <div>
            <p><span className="font-semibold">Trade:</span> Dress Making</p>
            <p><span className="font-semibold">Registration No:</span> 2700158702</p>
            <p><span className="font-semibold">Session:</span> 2019</p>
            <p><span className="font-semibold">Date of Birth:</span> 18/12/1997</p>
          </div>
        </div>

        {/* Table */}
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-full border-collapse text-sm md:text-base"
        >
          <thead>
            <tr className="bg-gray-200 text-gray-800">
              <th className="border p-2">Code</th>
              <th className="border p-2">Subject</th>
              <th className="border p-2">Grade</th>
              <th className="border p-2">Point</th>
            </tr>
          </thead>
          <tbody>
            // Subject rows with individual colors & animations
            {[
              ["1921", "Bangla", "A", "3.50"],
              ["1922", "English", "A+", "5.00"],
              ["1923", "Mathematics", "A+", "5.00"],
              ["1924", "Bangladesh & Global Studies", "A", "4.00"],
              ["1925", "Physics", "A+", "5.00"],
              ["1926", "Chemistry", "A", "4.00"],
              ["1927", "Computer Application", "A+", "5.00"],
              ["1928", "Self Employment & Entrepreneurship", "A+", "5.00"],
              ["1929", "Physical Education & Health", "A+", "5.00"],
              ["1221", "Islam & Moral Education", "A+", "5.00"],
              ["7123", "Dress Making - I", "A+", "5.00"],
              ["7124", "Dress Making - II", "A+", "5.00"],
              ["7182", "Industrial Attachment Training", "A+", "5.00"],
              ["1918", "Engineering Drawing", "A+", "5.00"]
            ].map((row, index) => (
              <motion.tr
                style={{ backgroundColor: ['#E3F2FD','#E8F5E9','#FFF3E0','#F3E5F5','#E0F7FA','#FCE4EC','#EDE7F6','#FFF8E1','#E8EAF6','#F1F8E9','#E0F2F1','#FFEBEE','#FFFDE7','#EDEFF7'][index % 14] }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {row.map((col, i) => (
                  <td key={i} className="border p-2 text-center">{col}</td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </motion.table>

        {/* GPA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-right mt-6 text-gray-800"
        >
          <p className="font-semibold">GPA without optional subject: <span className="text-blue-600">4.64</span></p>
          <p className="font-semibold">GPA with optional subject: <span className="text-green-600">4.86</span></p>
        </motion.div>
      </motion.div>
    </div>
  );
}
export default SchoolResults;