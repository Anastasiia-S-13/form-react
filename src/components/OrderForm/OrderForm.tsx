interface OrderFormProps{
    onSubmit: (value: string) => void;
}

function OrderForm({ onSubmit }: OrderFormProps) {
    const handleSubmit = (formData: FormData) => {
        const username = formData.get("username") as string;
        console.log("Username:", username);
        onSubmit("username");
    }

    return (
            <form action={handleSubmit}>
                <input type="text" name="username" />
                <button type="submit">Submit</button>
            </form>
        );
}

export default OrderForm;