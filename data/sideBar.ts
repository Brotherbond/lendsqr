import Users from '@/images/users.svg'
import Guarantors from '@/images/guarantors.svg'
import Loans from '@/images/loans.svg'
import DecisionModels from '@/images/decision_models.svg'
import Savings from '@/images/savings.svg'
import ServiceAccount from '@/images/service_account.svg'
import Whitelist from '@/images/whitelist.svg'
import Karma from '@/images/karma.svg'
import Organization from '@/images/organization.svg'
import LoanProducts from '@/images/loan_requests.svg'
import LoanRequests from '@/images/loan_requests.svg'
import SavingsProducts from '@/images/savings_products.svg'
import FeesAndCharges from '@/images/fees_and_charges.svg'
import Transactions from '@/images/transactions.svg'
import Services from '@/images/services.svg'
import FeesAndPricing from '@/images/fees_and_pricing.svg'
import AuditLogs from '@/images/audit_logs.svg'
import Preferences from '@/images/preferences.svg'
import Reports from '@/images/reports.svg'
import Settlements from '@/images/settlements.svg'


const sideBarElements = [
    {
        category_id: "1",
        name: "CUSTOMERS",
        children: [
            {
                title: "Users",
                img: Users,
                link: "user"
            },
            {
                title: "Guarantors",
                img: Guarantors,
                link: "guarantors"
            },
            {
                title: "Loans",
                img: Loans,
                link: "loans"
            },
            {
                title: "Decision Models",
                img: DecisionModels,
                link: "decision-models"
            },
            {
                title: "Savings",
                img: Savings,
                link: "savings"
            },
            {
                title: "Loan Requests",
                img: LoanRequests,
                link: "loan-requests"
            },
            {
                title: "Whitelist",
                img: Whitelist,
                link: "whitelist"
            },
            {
                title: "Karma",
                img: Karma,
                link: "karma"
            },
        ]
    },
    {
        category_id: "2",
        name: "BUSINESSES",
        children: [
            {
                title: "Organization",
                img: Organization,
                link: "organization"
            },
            {
                title: "Loan Products",
                img: LoanProducts,
                link: "loan_products"
            },
            {
                title: "Savings Products",
                img: SavingsProducts,
                link: "savings_products"
            },
            {
                title: "Fees and Charges",
                img: FeesAndCharges,
                link: "fees_and_charges"
            },
            {
                title: "Transactions",
                img: Transactions,
                link: "transactions"
            },
            {
                title: "Services",
                img: Services,
                link: "services"
            },
            {
                title: "Service Account",
                img: ServiceAccount,
                link: "service_account"
            },
            {
                title: "Settlements",
                img:Settlements,
                link: "settlements"
            },
            {
                title: "Reports",
                img: Reports,
                link: "reports"
            }
        ]
    },
    {
        category_id: "3",
        name: "SETTINGS",
        children: [
            {
                title: "Preferences",
                img: Preferences,
                link: "preferences"
            },
            {
                title: "Fees and Pricing",
                img: FeesAndPricing,
                link: "fees_and_pricing"
            },
            {
                title: "Audit Logs",
                img: AuditLogs,
                link: "audit_logs"
            },
        ]
    }

]


export default sideBarElements