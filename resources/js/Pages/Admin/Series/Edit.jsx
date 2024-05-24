import Button from '@/Components/Dashboard/Button'
import Editor from '@/Components/Dashboard/Form/Editor'
import Error from '@/Components/Dashboard/Form/Error'
import Input from '@/Components/Dashboard/Form/Input'
import InputFile from '@/Components/Dashboard/Form/InputFile'
import Label from '@/Components/Dashboard/Form/Label'
import MultipleSelect from '@/Components/Dashboard/Form/MultipleSelect'
import Select from '@/Components/Dashboard/Form/Select'
import Textarea from '@/Components/Dashboard/Form/TextArea'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { useForm } from '@inertiajs/react'

const Index = ({ categories, series }) => {
    const { data, setData, transform, post, processing, errors } = useForm({
        _method: "patch", // Add _method to payload
        title: series.title,
        category_id: series.category,
        description: series.description,
        picture: '',
    });
    const onChange = (e) => setData(e.target.name, e.target.value);

    transform((data) => ({
        ...data,
        category_id: data.category_id.id,
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.series.update', series.id), {
            preserveScroll: true
        });
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">Create new series</h2>
            </div>

            <section className="my-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <Label forInput="picture" value="Picture" />
                        <InputFile
                            name="picture"
                            id="picture"
                            onChange={(e) => setData('picture', e.target.files[0])}
                        />
                        <Error message={errors.picture} />
                    </div>
                    <div className='mb-6'>
                        <Label forInput="category_id">Category</Label>
                        <Select
                            value={data.category_id}
                            data={categories}
                            onChange={(e) => setData('category_id', e)}
                        />
                        <Error message={errors.category_id} />
                    </div>
                    <div className="mb-6">
                        <Label forInput="title" value="Title" />
                        <Input
                            name="title"
                            id="title"
                            onChange={onChange}
                            value={data.title}
                            placeholder="Enter series title"
                        />
                        <Error message={errors.title} />
                    </div>
                    <div className="mb-6">
                        <Editor
                            name="description"
                            id="description"
                            onChange={onChange}
                            value={data.description}
                        />
                        <Error message={errors.description} />
                    </div>
                    <Button disabled={processing}>Create</Button>
                </form>
            </section>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} title="Create new series" />

export default Index
