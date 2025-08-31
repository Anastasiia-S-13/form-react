import OrderForm from "../OrderForm/OrderForm";

function App() {
    const handleOrder = (data: string) => {
        console.log("Order:", data);
        
    }

    return <div>
        <h1>Place your order</h1>
    <OrderForm onSubmit={handleOrder} />
</div>
}

export default App