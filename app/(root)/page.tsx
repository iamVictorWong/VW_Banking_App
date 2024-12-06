import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
const LoggedIn = {firstName: "Victor"}

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome to VW Bank"
                        user= {LoggedIn?.firstName || "Guest"}
                        subtext="Trust Funding Banking Platform"
                    />
                    <TotalBalanceBox
                        account={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
            </div>
        </section>
    );
}

export default Home