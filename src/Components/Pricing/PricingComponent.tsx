// PricingComponent.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, selectPlan } from '../../../store';
import './PricingComponent.css'; // Добавим стили для компонента

const PricingComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { plans, selectedPlan } = useSelector((state: RootState) => state.plans);

  const handlePlanSelect = (planName: string) => {
    dispatch(selectPlan(planName));
  };

  return (
    <div className="pricing-container">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`pricing-card ${selectedPlan === plan.name ? 'selected' : ''}`}
          onClick={() => handlePlanSelect(plan.name)}
        >
          <h3>{plan.name}</h3>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          {plan.price > 0 && <div className="price">{plan.price},00</div>}
        </div>
      ))}
    </div>
  );
};

export default PricingComponent;
