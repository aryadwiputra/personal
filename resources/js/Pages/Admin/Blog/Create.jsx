import Button from '@/Components/Dashboard/Button'
import Editor from '@/Components/Dashboard/Form/Editor'
import Input from '@/Components/Dashboard/Form/Input'
import InputFile from '@/Components/Dashboard/Form/InputFile'
import Label from '@/Components/Dashboard/Form/Label'
import MultipleSelect from '@/Components/Dashboard/Form/MultipleSelect'
import Select from '@/Components/Dashboard/Form/Select'
import Textarea from '@/Components/Dashboard/Form/TextArea'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Link, useForm } from '@inertiajs/react'

const Index = ({ categories, tags, errors }) => {
    console.log(categories);
    console.log(tags);
    const { data, setData } = useForm({
        title: '',
        teaser: '',
        category_id: '',
        body: '',
        picture: '',
        tags: [tags[0], tags[1]],
        // status: statuses[0]
    });

    const onChange = (e) => setData(e.target.name, e.target.value);

    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">Create New Blog</h2>
            </div>

            <section className="my-5">
                <div className="mb-6">
                    <Label forInput="picture" value="Picture" />
                    <InputFile
                        name="picture"
                        id="picture"
                        onChange={(e) => setData('picture', e.target.files[0])}
                    />
                    {errors.picture ? <Error value={errors.picture} /> : null}
                </div>
                <div className="grid grid-cols-12 gap-6 mb-6">
                    <div className="col-span-4">
                        <div>
                            <Label forInput="category_id">Category</Label>
                            <Select
                                value={data.category_id}
                                data={categories}
                                onChange={(e) => setData('category_id', e)}
                            />
                            {errors.category_id ? (
                                <Error value={errors.category_id} />
                            ) : null}
                        </div>
                    </div>
                    <div className="col-span-8">
                        <div>
                            <Label forInput="tags">Tags</Label>
                            <MultipleSelect
                                selectedItem={data.tags}
                                data={tags}
                                onChange={(e) => setData('tags', e)}
                            />
                            {errors.tags ? <Error value={errors.tags} /> : null}
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <Label forInput="title" value="Title" />
                    <Input
                        name="title"
                        id="title"
                        onChange={onChange}
                        value={data.title}
                        placeholder="Enter blog title"
                    />
                    {errors.title ? <Error value={errors.title} /> : null}
                </div>
                <div className="mb-6">
                    <Label forInput="teaser" value="Teaser" />
                    <Textarea
                        name="teaser"
                        id="teaser"
                        onChange={onChange}
                        value={data.teaser}
                        placeholder="Write your blog teaser here..."
                    />
                </div>
                <div className="mb-6">
                    <Editor
                        name="body"
                        id="body"
                        onChange={onChange}
                        value={data.body}
                    />
                    {errors.body ? <Error value={errors.body} /> : null}
                </div>
                <Button>Create</Button>
                {/* <div className="grid grid-cols-12 gap-6 mb-6">
                    <div className="col-span-4">
                        <div className="mb-6">
                            <Select
                                value={data.status}
                                data={statuses}
                                onChange={(e) => setData('status', e)}
                            />
                            {errors.status ? (
                                <Error value={errors.status} />
                            ) : null}
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} title="Create new blog" />

export default Index
