import { Title } from "@/components/Title"
import { ExperienceCard, EducationCard } from "@/components/InfoCard"

export default function About() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
            <Title title={"About Me"} />

            {/* About Me Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">About Me</h1>
                    <div className="border-t border-zinc-200 dark:border-zinc-700 mb-8" />

                    <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        <p className="text-lg">
                            I'm a Freelance data scientist / developer working in the tech industry since 2017.
                        </p>
                        <p>
                            I have worked in different areas of AI such as computer vision, NLP, time series, and LLMs.
                        </p>
                        <p>
                            What I like doing is model design, data preprocessing, and model evaluation.
                        </p>
                        <p>
                            But I can also operate more widely – I have good skills in development and MLOps.
                        </p>
                        <p>
                            I also like working on personal projects related to AI and Maths.
                        </p>
                        <p>
                            I'm looking for a mission related to computer vision and deep learning where I could bring
                            the best of my skills.
                        </p>
                        <p>
                            Do not hesitate to contact me by email or LinkedIn for any questions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-800">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Experience</h1>
                    <div className="border-t border-zinc-200 dark:border-zinc-700 mb-8" />

                    <div className="space-y-6">
                        <ExperienceCard
                            company="Nodya Group"
                            position="Data Scientist - Data Engineer"
                            date="September 2018 - November 2024"
                            imageSrc="/nodya_group_logo.jpeg"
                            description={
                                <div>
                                    <p>As a data consultant, I worked on many AI use cases:</p>
                                    <ul className="list-disc list-inside mt-2 space-y-1">
                                        <li>Data augmentation software</li>
                                        <li>Sales forecast</li>
                                        <li>Email classification</li>
                                        <li>Image recognition on aircraft parts</li>
                                    </ul>
                                </div>
                            }
                            tags={[
                                { name: "python", color: "bg-blue-100 text-blue-800" },
                                { name: "llm", color: "bg-purple-100 text-purple-800" },
                                { name: "sklearn", color: "bg-green-100 text-green-800" },
                                { name: "elastic-search", color: "bg-orange-100 text-orange-800" },
                                { name: "docker", color: "bg-cyan-100 text-cyan-800" },
                                { name: "keras", color: "bg-red-100 text-red-800" },
                                { name: "deep learning", color: "bg-indigo-100 text-indigo-800" },
                            ]}
                        />

                        <ExperienceCard
                            company="Sogeti High Tech"
                            position="Software Engineer"
                            date="March 2017 - July 2018"
                            imageSrc="/sogeti_high_tech_logo.jpeg"
                            description="Development of 3D simulation with Unity3D to replicate the behavior of an urban subway."
                            tags={[
                                { name: "c#", color: "bg-green-100 text-green-800" },
                                { name: "Unity3D", color: "bg-zinc-100 text-zinc-800" },
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">Education / Training</h1>
                    <div className="border-t border-zinc-200 dark:border-zinc-700 mb-8" />

                    <div className="space-y-6">
                        <EducationCard
                            institution="Polytech Nice Sophia"
                            degree="Applied Mathematics Engineering"
                            date="September 2014 - September 2017"
                            description={
                                <div>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li><strong>Machine Learning:</strong> Neural Networks, Random Forest, Logistic Regression, SVM, K-means.</li>
                                        <li><strong>Applied Mathematics:</strong> Optimization, Modelling, Statistics, Signal Processing.</li>
                                    </ul>
                                </div>
                            }
                        />
                        <EducationCard
                            institution="Scientific Preparatory Class"
                            degree="MP - MPSI"
                            date="September 2012 - July 2014"
                            description="Intensive program in Mathematics, Physics, and Engineering sciences."
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}