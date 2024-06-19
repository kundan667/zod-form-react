import { useForm, } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from './TextInput';
import { FormFields, schema } from './schema/signUp';
import Modal from './Modal';

function Forms() {
    const { register, handleSubmit, setError, reset, formState: { isSubmitting, errors } } = useForm<FormFields>({ resolver: zodResolver(schema), });

    const onSubmit = async (data: FormFields) => {
        console.log("data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const modal = document.getElementById('my_modal') as HTMLDialogElement;
        modal.showModal()
        await new Promise((resolve) => setTimeout(resolve, 2000))
        //setError() can be used to set error received from backend
        reset();
    }

    return (
        <div className='p-[2rem] md:p-[3rem] lg:p-[4rem]'>
            <h1 className='text-2xl font-bold mb-4'>Create Your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    placeholder='First Name'
                    {...register('firstName')}
                    error={errors?.firstName?.message}>
                </TextInput>

                <TextInput
                    placeholder='last Name'
                    {...register('lastName')}
                    error={errors?.lastName?.message}>
                </TextInput>

                <TextInput
                    placeholder='Email'
                    icon='/assets/mail_icon.png'
                    {...register('email')}
                    error={errors?.email?.message} >
                </TextInput>

                <TextInput
                    placeholder='Password'
                    type="password"
                    {...register('password')}
                    error={errors?.password?.message}>
                </TextInput>

                <TextInput
                    placeholder='Confirm Password'
                    type="password"
                    {...register('confirmPassword')}
                    error={errors?.confirmPassword?.message}>
                </TextInput>

                <TextInput
                    placeholder='Age'
                    type="number"
                    {...register('age')}
                    error={errors?.age?.message}
                >
                </TextInput>

                <button className="btn btn-md bg-[#d9c3b6]">
                    {isSubmitting ? 'Loading...' : 'Create Account'}
                </button>
            </form>
            <Modal />
        </div>
    )
}

export default Forms
