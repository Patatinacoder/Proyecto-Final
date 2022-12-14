
import { useForm } from "react-hook-form"





const Formulario = () =>{
    const {register,formState:{errors}, watch,  handleSubmit} = useForm()
    

    const onSubmit = (data) =>
{
    console.log(data);
}

const incluirTelefono = watch('incluirTelefono')
    return <div>

        <h2>Form</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label >Name</label>
                <input type="text" {...register('nombre', {
                    required:true})} />
                    {errors.name?.type==='required' && <p>Required</p>}

                <div>
                    <label>Email</label>
                    <input type="text" {...register('email',{
                        required:true,
                        pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })} />
                    {errors.email?.type=== 'pattern' && <p>Incorrect format</p>}
                </div>

                <div>
                    <label>Include Phone Number?</label>
                    <input type="checkbox" {...register('Include Phone')}/>

                </div>
                {incluirTelefono && (
                <div>
                <label>Phone</label>
                <input type="text" {...register('phone')} />
                </div>
                )}
            </div>
<input type="submit" value="Enviar" />
        </form>
    </div>
}

export default Formulario