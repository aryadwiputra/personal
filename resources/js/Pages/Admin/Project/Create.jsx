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

const Create = ({ tags }) => {
    const { data, setData, transform, post, processing, errors } = useForm({
        title: '',
        description: '',
        picture: '',
        tags: [tags[0], tags[1]],
    });

    const onChange = (e) => setData(e.target.name, e.target.value);

    transform((data) => ({
        ...data,
        tags: data.tags.map((t) => t.id),
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route('admin.projects.store'), {
            preserveScroll: true
        });
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">Create new project</h2>
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
                        <Label forInput="tags">Tags</Label>
                        <MultipleSelect
                            selectedItem={data.tags}
                            data={tags}
                            onChange={(e) => setData('tags', e)}
                        />
                        <Error message={errors.tags} />
                    </div>
                    <div className="mb-6">
                        <Label forInput="title" value="Title" />
                        <Input
                            name="title"
                            id="title"
                            onChange={onChange}
                            value={data.title}
                            placeholder="Enter project title"
                        />
                        <Error message={errors.title} />
                    </div>
                    <div className="mb-6">
                        <Label forInput="description" value="description" />
                        <Textarea
                            name="description"
                            id="description"
                            onChange={onChange}
                            value={data.description}
                            placeholder="Write your project description here..."
                        />
                        <Error message={errors.description} />
                    </div>
                    <div className="grid grid-cols-12 gap-6 mb-6">
                        <div className="col-span-6">
                            <div>
                                <Label forInput="demo">Demo URL</Label>
                                <Input
                                    name="demo"
                                    id="demo"
                                    onChange={onChange}
                                    placeholder="Enter project demo URL"
                                />
                                <Error message={errors.demo} />
                            </div>
                        </div> <div className="col-span-6">
                            <div>
                                <Label forInput="source_code">Source Code URL</Label>
                                <Input
                                    name="source_code"
                                    id="source_code"
                                    onChange={onChange}
                                    placeholder="Enter project source code URL"
                                />
                                <Error message={errors.source_code} />
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div>
                                <Label forInput="duration">Duration</Label>
                                <Input
                                    name="duration"
                                    id="duration"
                                    onChange={onChange}
                                    placeholder="Enter project duration"
                                />
                                <Error message={errors.duration} />
                            </div>
                        </div>
                    </div>
                    <Button disabled={processing}>Create</Button>
                </form>
            </section>
        </>
    )
}

Create.layout = page => <DashboardLayout children={page} title="Create new project" />

export default Create
