"use client";

import { useMemo, useState } from "react";
import { whatsappLink } from "@/lib/constants";

function formatINR(n: number) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export default function EmiCalculator() {
  const [price, setPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(200000);
  const [rate, setRate] = useState(10.5);
  const [tenure, setTenure] = useState(4);

  const { emi, totalInterest, totalPayable } = useMemo(() => {
    const principal = Math.max(price - downPayment, 0);
    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;
    if (principal <= 0 || monthlyRate <= 0 || months <= 0) {
      return { emi: 0, totalInterest: 0, totalPayable: 0 };
    }
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayableValue = emiValue * months;
    const totalInterestValue = totalPayableValue - principal;
    return {
      emi: emiValue,
      totalInterest: totalInterestValue,
      totalPayable: totalPayableValue,
    };
  }, [price, downPayment, rate, tenure]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-charcoal border border-gold/20 p-6 sm:p-10">
      <div className="space-y-6">
        <FieldSlider
          label="Vehicle Price"
          value={price}
          onChange={setPrice}
          min={100000}
          max={5000000}
          step={10000}
          display={formatINR(price)}
        />
        <FieldSlider
          label="Down Payment"
          value={downPayment}
          onChange={setDownPayment}
          min={0}
          max={price}
          step={10000}
          display={formatINR(downPayment)}
        />
        <FieldSlider
          label="Interest Rate (p.a.)"
          value={rate}
          onChange={setRate}
          min={6}
          max={18}
          step={0.1}
          display={`${rate.toFixed(1)}%`}
        />
        <FieldSlider
          label="Loan Tenure"
          value={tenure}
          onChange={setTenure}
          min={1}
          max={7}
          step={1}
          display={`${tenure} yr${tenure > 1 ? "s" : ""}`}
        />
      </div>

      <div className="flex flex-col justify-between">
        <div className="space-y-5">
          <ResultRow label="Monthly EMI" value={formatINR(emi)} highlight />
          <ResultRow label="Total Interest" value={formatINR(totalInterest)} />
          <ResultRow label="Total Payable" value={formatINR(totalPayable)} />
        </div>

        <a
          href={whatsappLink(
            `Hi, I'd like to check finance eligibility. Vehicle Price: ${formatINR(price)}, Down Payment: ${formatINR(downPayment)}, Tenure: ${tenure} yrs. Estimated EMI: ${formatINR(emi)}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center px-6 py-4 text-sm font-semibold uppercase tracking-wide bg-gold text-black hover:bg-gold-light transition-colors text-center"
        >
          Check Finance Eligibility
        </a>
      </div>
    </div>
  );
}

function FieldSlider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  display,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  display: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-white/70">
          {label}
        </label>
        <span className="text-gold font-semibold">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#e2231a]"
      />
    </div>
  );
}

function ResultRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className={`flex justify-between items-center border-b border-white/10 pb-3 ${highlight ? "" : ""}`}>
      <span className="text-sm text-white/70 uppercase tracking-wide">{label}</span>
      <span className={`font-display font-bold ${highlight ? "text-gold text-2xl" : "text-white text-lg"}`}>
        {value}
      </span>
    </div>
  );
}
