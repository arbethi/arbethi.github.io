"use client"

import React from "react"

export type TagType = {
    name: string
    color?: string
}

export type InfoCardProps = {
    title: string
    subtitle?: string
    imageSrc?: string
    imageAlt?: string
    date?: string
    description?: string | React.ReactNode
    tags?: TagType[]
    className?: string
}

const defaultTagColors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-purple-100 text-purple-800",
    "bg-orange-100 text-orange-800",
    "bg-red-100 text-red-800",
    "bg-yellow-100 text-yellow-800",
    "bg-indigo-100 text-indigo-800",
    "bg-pink-100 text-pink-800",
    "bg-teal-100 text-teal-800",
    "bg-cyan-100 text-cyan-800",
]

export const InfoCard = ({
    title,
    subtitle,
    imageSrc,
    imageAlt = "Logo",
    date,
    description,
    tags = [],
    className = "",
}: InfoCardProps) => {
    return (
        <div className={`bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
            <div className="p-6">
                {/* Header with image and title */}
                <div className="flex items-start gap-4 mb-6">
                    {imageSrc && (
                        <div className="flex-shrink-0">
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="w-12 h-12 rounded-lg object-cover border-2 border-zinc-200 dark:border-zinc-700"
                            />
                        </div>
                    )}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white truncate">{title}</h3>
                        {(subtitle || date) && (
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                {subtitle}
                                {subtitle && date && " - "}
                                {date}
                            </p>
                        )}
                    </div>
                </div>

                {/* Description */}
                {description && (
                    <div className="prose dark:prose-invert max-w-none mb-6">
                        {description}
                    </div>
                )}

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {tags.map((tag, index) => (
                            <span
                                key={`${tag.name}-${index}`}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color || defaultTagColors[index % defaultTagColors.length]}`}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export const ExperienceCard = ({
    company,
    position,
    date,
    imageSrc,
    description,
    tags = [],
    className = "",
}: {
    company: string
    position: string
    date: string
    imageSrc?: string
    description: string | React.ReactNode
    tags?: TagType[]
    className?: string
}) => (
    <InfoCard
        title={company}
        subtitle={`${position}`}
        date={date}
        imageSrc={imageSrc}
        description={description}
        tags={tags}
        className={className}
    />
)

export const EducationCard = ({
    institution,
    degree,
    date,
    description,
    tags = [],
    className = "",
}: {
    institution: string
    degree: string
    date: string
    description?: string | React.ReactNode
    tags?: TagType[]
    className?: string
}) => (
    <InfoCard
        title={institution}
        subtitle={degree}
        date={date}
        description={description}
        tags={tags}
        className={className}
    />
)
