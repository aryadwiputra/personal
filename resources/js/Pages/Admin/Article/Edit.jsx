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

const Index = ({ article, categories, tags, statuses, series }) => {
    const { data, setData, transform, put, processing, errors } = useForm({
        title: article.title,
        teaser: article.teaser,
        category_id: article.category,
        series_id: article.series[0],
        body: article.body,
        picture: article.picture,
        tags: [tags[0], tags[1]],
        status: statuses[article.status]
    });

    console.log(series)

    const onChange = (e) => setData(e.target.name, e.target.value);

    transform((data) => ({
        ...data,
        category_id: data.category_id.id,
        series_id: data.series_id.id,
        tags: data.tags.map((t) => t.id),
        status: data.status.id,

    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.articles.update', article.id), {
            preserveScroll: true
        });
    }

    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold leading-tight">Edit {article.title}</h2>
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
                    <div>
                        <Label forInput="series_id">Series</Label>
                        <Select
                            value={data.series_id ? data.series_id : series}
                            data={series}
                            onChange={(e) => setData('series_id', e)}
                        />
                        <Error message={errors.series_id} />
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
                                <Error message={errors.category_id} />
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
                                <Error message={errors.tags} />
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
                        <Error message={errors.title} />
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
                        <Error message={errors.teaser} />
                    </div>
                    <div className="mb-6">
                        <Editor
                            name="body"
                            id="body"
                            onChange={onChange}
                            value={data.body}
                        />
                        <Error message={errors.body} />
                    </div>
                    <div className="grid grid-cols-12 gap-6 mb-6">
                        <div className="col-span-4">
                            <div className="mb-6">
                                <Label forInput="status">Status</Label>
                                <Select
                                    value={data.status}
                                    data={statuses}
                                    onChange={(e) => setData('status', e)}
                                />
                                <Error message={errors.status} />
                            </div>
                        </div>
                    </div>
                    <Button disabled={processing}>Update</Button>
                </form>
            </section>
        </>
    )
}

Index.layout = page => <DashboardLayout children={page} title="Edit article" />

export default Index
